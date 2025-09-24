// /api/google-reviews.js
// Google Places -> clean JSON for the client.
// Works on Vercel serverless. Add env vars in Vercel Settings.
/* eslint-env node */

export default async function handler(req, res) {
  try {
    // eslint-disable-next-line no-undef
    const placeId = process.env.GOOGLE_PLACE_ID;
    // eslint-disable-next-line no-undef
    const key = process.env.GOOGLE_MAPS_API_KEY;

    if (!placeId || !key) {
      return res.status(200).json({
        ok: false,
        reviews: null,
        reason: "Missing env vars",
        hint:
          "Set GOOGLE_PLACE_ID and GOOGLE_MAPS_API_KEY in Vercel > Project > Settings > Environment Variables.",
      });
    }

    // options (mirror your old habits):
    // ?lang=en   (default en)
    // ?n=5       (default 6)
    // ?g=1       (no-op; included because you mentioned it)
    const urlParams = new URLSearchParams({
      place_id: placeId,
      fields:
        "rating,user_ratings_total,reviews(profile_photo_url,author_name,rating,text,relative_time_description)",
      key,
      language: req.query.lang || "en",
    });

    const url = `https://maps.googleapis.com/maps/api/place/details/json?${urlParams.toString()}`;
    const gRes = await fetch(url, { cache: "no-store" });
    const data = await gRes.json();

    if (req.query.debug || req.query.g === "debug") {
      return res.status(200).json({ ok: gRes.ok, google_status: data.status, data });
    }

    if (!gRes.ok || data.status !== "OK") {
      return res.status(200).json({
        ok: false,
        reviews: null,
        reason: data.status || "Error",
        error_message: data.error_message || null,
      });
    }

    const limit = Math.max(1, Math.min(10, parseInt(req.query.n || "6", 10)));
    const list =
      (data.result?.reviews || []).slice(0, limit).map((r) => ({
        author: r.author_name,
        rating: r.rating,
        text: r.text,
        time: r.relative_time_description,
        photo: r.profile_photo_url || null,
      })) || [];

    // Cache at edge for 12h, allow stale for 1 day
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
