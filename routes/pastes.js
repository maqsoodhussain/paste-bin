const express = require('express');
// const { v4: uuidv4 } = require('uuid');

// const Paste = require('../models/Paste');
// const { getNow } = require('../utils/time');

const router = express.Router();

router.get("/test",(req,res)=>{
  return res.status(200).json({ ok: true, message: 'wroking' });
})



/**
 * POST /api/pastes
 * Create a new paste
 */
// router.post('/pastes', async (req, res) => {
//   // try {
//   //   const { content, ttl_seconds, max_views } = req.body;

//   //   /* ---------- INPUT VALIDATION ---------- */

//   //   if (!content || typeof content !== 'string' || content.trim() === '') {
//   //     return res.status(400).json({ error: 'Invalid content' });
//   //   }

//   //   if (ttl_seconds !== undefined) {
//   //     if (!Number.isInteger(ttl_seconds) || ttl_seconds < 1) {
//   //       return res.status(400).json({ error: 'Invalid ttl_seconds' });
//   //     }
//   //   }

//   //   if (max_views !== undefined) {
//   //     if (!Number.isInteger(max_views) || max_views < 1) {
//   //       return res.status(400).json({ error: 'Invalid max_views' });
//   //     }
//   //   }

//   //   /* ---------- CREATE PASTE ---------- */

//   //   const now = getNow(req);
//   //   const id = uuidv4();

//   //   const expiresAt = ttl_seconds ? now + ttl_seconds * 1000 : null;

//   //   const paste = new Paste({
//   //     _id: id,
//   //     content: content,
//   //     createdAt: now,
//   //     expiresAt: expiresAt,
//   //     maxViews: max_views ?? null,
//   //     views: 0
//   //   });

//   //   await paste.save();

//   //   /* ---------- RESPONSE ---------- */

//   //   const baseUrl = `${req.protocol}://${req.get('host')}/api`;

//   //   res.status(201).json({
//   //     id: id,
//   //     url: `${baseUrl}/p/${id}`
//   //   });

//   // } catch (err) {
//   //   console.error(err);
//   //   res.status(500).json({ error: 'Internal server error' });
//   // }
// });


/**
 * GET /api/pastes/:id
 * Fetch a paste (JSON)
 */
// router.get('/pastes/:id', async (req, res) => {
//   // try {
//   //   const { id } = req.params;

//   //   const paste = await Paste.findById(id);

//   //   /* ---------- NOT FOUND ---------- */
//   //   if (!paste) {
//   //     return res.status(404).json({ error: 'Paste not found' });
//   //   }

//   //   const now = getNow(req);

//   //   /* ---------- TTL CHECK ---------- */
//   //   if (paste.expiresAt !== null && now > paste.expiresAt) {
//   //     return res.status(404).json({ error: 'Paste expired' });
//   //   }

//   //   /* ---------- VIEW LIMIT CHECK ---------- */
//   //   if (paste.maxViews !== null && paste.views >= paste.maxViews) {
//   //     return res.status(404).json({ error: 'View limit exceeded' });
//   //   }

//   //   /* ---------- INCREMENT VIEWS ---------- */
//   //   paste.views += 1;
//   //   await paste.save();

//   //   /* ---------- RESPONSE ---------- */
//   //   res.status(200).json({
//   //     content: paste.content,
//   //     remaining_views:
//   //       paste.maxViews === null
//   //         ? null
//   //         : Math.max(paste.maxViews - paste.views, 0),
//   //     expires_at:
//   //       paste.expiresAt === null
//   //         ? null
//   //         : new Date(paste.expiresAt).toISOString()
//   //   });

//   // } catch (err) {
//   //   console.error(err);
//   //   res.status(500).json({ error: 'Internal server error' });
//   // }
//   res.send("paste route");
// });


/**
 * GET /p/:id
 * View paste in browser (HTML)
 */
// router.get('/p/:id', async (req, res) => {
//   try {
//     const { id } = req.params;

//     const paste = await Paste.findById(id);

//     if (!paste) {
//       return res.status(404).send('Not Found');
//     }

//     const now = getNow(req);

//     // TTL check
//     if (paste.expiresAt !== null && now > paste.expiresAt) {
//       return res.status(404).send('Not Found');
//     }

//     // View limit check
//     if (paste.maxViews !== null && paste.views >= paste.maxViews) {
//       return res.status(404).send('Not Found');
//     }

//     // Increment views
//     paste.views += 1;
//     await paste.save();

//     // Render safe HTML
//     res.status(200).render('paste', {
//       content: paste.content
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal Server Error');
//   }
// });



module.exports = router;
