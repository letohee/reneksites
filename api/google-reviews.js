// /api/google-reviews.js

export default async function handler(req, res) {
  try {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const key = process.env.GOOGLE_MAPS_API_KEY;

    if (!placeId || !key) {
      return res.status(200).json({
        ok: false,
        reviews: null,
        reason: "Missing env vars",
        hint: "Set GOOGLE_PLACE_ID and GOOGLE_MAPS_API_KEY in Vercel > Settings > Environment Variables (for Preview & Production).",
      });
    }

    const params = new URLSearchParams({
      place_id: placeId,
      fields:
        "rating,user_ratings_total,reviews(profile_photo_url,author_name,rating,text,relative_time_description)",
      key,
      // Optional: force English reviews (helps consistency)
      language: "en",
    });

    const url = `https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`;

    const gRes = await fetch(url, { cache: "no-store" });
    const data = await gRes.json();

    // return raw for debug if ?debug=1
    if (req.query?.debug || req.url.includes("debug=1")) {
      return res.status(200).json({ ok: gRes.ok, google_status: data.status, data });
    }

    if (!gRes.ok || data.status !== "OK") {
      return res.status(200).json({
        ok: false,
        reviews: null,
        reason: data.status || "Error",
        error_message: data.error_message || null,
        hint:
          "Check API key validity, billing enabled, Places API enabled, and API restrictions (must allow Places API).",
      });
    }

    const list =
      (data.result?.reviews || []).slice(0, 6).map((r) => ({
        author: r.author_name,
        rating: r.rating,
        text: r.text,
        time: r.relative_time_description,
        photo: r.profile_photo_url || null,
      })) || [];

    // Cache for 12h at the edge; allow stale-while-revalidate for 1d
    res.setHeader("Cache-Control", "s-maxage=43200, stale-while-revalidate=86400");
    return res.status(200).json({ ok: true, reviews: list });
  } catch (e) {
    return res.status(200).json({
      ok: false,
      reviews: null,
      reason: "Fetch error",
      message: e?.message || String(e),
    });
  }
}
