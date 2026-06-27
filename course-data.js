/* ============================================================
   Course content for "Learn Wuji in One Week" — v1 preview.
   Sourced from the Obsidian vault (Start Here, Day 1–7,
   Where to Go Next). Audio is left as a visual placeholder.
   Durations: self-narrate steps use the authored [!timer]
   values; explore/recall steps show "—:—" (timing TBD).
   ============================================================ */

const COURSE = {
  title: "Learn Wuji in One Week",
  intro: "~20 minutes a day. Taste the essential cues in your body — and learn to recall the practice on your own.",
  quote: "The more you open, the more you can release. The more you release, the more you can open.",

  items: [
    /* ---------- START HERE ---------- */
    {
      id: "start", kind: "article", listTitle: "First, hello",
      context: "So glad you're here — here's how the week works.",
      html: `
        <div class="eyebrow clay">Learn Wuji</div>
        <h1>Learn Wuji in One Week</h1>
        <p>By the end of this week you won't have <em>mastered</em> wuji (lol), but you will have <strong>tasted the essential cues</strong> in your body and learned to <strong>recall the basic practice.</strong> That's the whole aim — an experiential foothold, and the procedural knowledge that makes practice possible.</p>
        <p>~20 minutes a day.</p>

        <h2>The one principle behind every cue</h2>
        <p>For every part of the body you're balancing two opposing forces — and never forcing either:</p>
        <ul>
          <li><strong>Open (yang):</strong> inflate, expand, spread to the sides — <em>until the first hint of resistance, then stop.</em></li>
          <li><strong>Release (yin):</strong> sink, drain, drape toward the ground — <em>relax into gravity.</em></li>
        </ul>
        <div class="lead-quote">"The more you open, the more you can release. The more you release, the more you can open."</div>

        <h2>"Directionally correct"</h2>
        <p>You are not looking for perfection. You're looking for a clear sense that something is moving the right way — a slight shift from your habit. <strong>Merely intending a cue (such as "inflate the shoulders") is a valid starting point.</strong> Actual sensations of change become clearer with practice.</p>

        <h2>How each day works</h2>
        <ul>
          <li><strong>Recall first</strong> — from memory while you stand, you practice the cues you've already met. Most courses won't ask this of you, but <strong>active recall</strong> is what makes the practice <em>yours.</em></li>
          <li><strong>Explore &amp; taste</strong> — you're guided through explorations and new cues, to get an immersive, felt sense of what each cue feels like when it's working.</li>
          <li><strong>Self-narrate</strong> — after being guided, you talk yourself through the new cue <em>as if you were guiding someone else.</em></li>
        </ul>
        <div class="callout">Self-narration is the beginning of "owning" the practice, so we don't make the mistake of being passive in our learning. It's a low-stakes test of what you understood while practicing. (And not a measure of your worth as a human.)</div>
      `
    },

    /* ---------- DAY 1 ---------- */
    {
      id: "day1", kind: "lesson", num: 1,
      listTitle: "Day 1 — The whole map",
      eyebrow: "Day 1 · Orientation",
      title: "The Whole Map",
      oneLiner: "Learn opening and releasing, then take one guided pass through the whole body.",
      context: "Orientation · the principle + a head-to-toe skim",
      segments: [
        {
          type: "read", title: "The principle", duration: null,
          body: `
            <p>Every cue is a balance of two forces.</p>
            <p><span class="lead">Open</span> — inflate / spread, until the <em>first hint</em> of resistance, then stop.</p>
            <p><span class="lead">Release</span> — sink / drain / drape toward the ground.</p>
            <div class="note"><span class="note-label">Note</span>It can help to view these as two things already happening in your body <em>right now.</em> You're already upright (open / yang). Your body is already responding to gravity (release / yin). Instead of adding something, lean into the two forces already unfolding within you.</div>
          `
        },
        {
          type: "explore", title: "Explore — head-to-toe skim", duration: null,
          body: `
            <p><span class="lead">Posture (wuji)</span> — a balanced starting posture between yin and yang; opening and releasing held together.</p>
            <p><span class="lead">Feet</span> — shoulder-width, toes roughly forward; soles spreading in all directions on the ground; weight even, ~60% in the heels, 40% in the front.</p>
            <p><span class="lead">Knees</span> — bend until the low back unhooks and hangs (a little deeper than expected, quads easy); widen sideways like a balloon to the first hint of resistance, then release down into the feet.</p>
            <p><span class="lead">Hips &amp; center</span> — hips inflate slightly outward; the groin falls and releases; the qua sinks down and slightly back, like perching on a tall stool; the pelvis lengthens down while the spine lengthens up.</p>
            <p><span class="lead">Shoulders &amp; arms</span> — shoulders inflate to the sides and the chest sinks down between them; arms hang from the open shoulders, elbows heavy; palms open, fingernails lively.</p>
            <p><span class="lead">Neck &amp; head</span> — the neck lengthens and floats up; the chin softens down as the crown lifts; the back of the neck opens only to the first hint of resistance.</p>
            <p class="cue">All at once — combine everything: opening, expanding, releasing.</p>
          `,
          success: "A vague, whole-body sense of being both lifted and released at once — light at the top, heavy at the bottom, open in the middle. It will be vague. Vague is directionally correct — vague is just fine for Day 1."
        },
        {
          type: "self-narrate", title: "Self-narrate", subtitle: "in your own words", duration: "4:00",
          body: `
            <p>Take the standing position. Without referencing the audio or the practice script, guide yourself through the practice: one slow pass from feet to head, <em>in your own words,</em> out loud or in your head, naming each part and what it does (the feet spread, the knees soften…). You'll forget some — no worries. When you're done, check any cues you missed.</p>
          `,
          revealLabel: "Check any cues you missed",
          checklist: [
            "Feet — weight even, soles awake",
            "Knees — soft, low back hangs",
            "Pelvis — tailbone hangs heavy",
            "Shoulders — wide, front and back",
            "Chest — drapes between open shoulders",
            "Arms — hang heavy from the shoulders",
            "Head — floats; body hangs beneath"
          ]
        }
      ]
    },

    /* ---------- DAY 2 ---------- */
    {
      id: "day2", kind: "lesson", num: 2,
      listTitle: "Day 2 — Foundation",
      eyebrow: "Day 2 · Feet & Knees",
      title: "Foundation",
      oneLiner: "Feet and knees — the two cues everything else stands on. We slow down and actually explore them.",
      context: "Feet & knees · the two cues everything stands on",
      segments: [
        {
          type: "recall", title: "Recall first — from memory", duration: null,
          body: `
            <p>Take the standing position. From memory, take your own head-to-toe pass from yesterday — feet, knees, pelvis, shoulders, chest, arms, head. <strong>Don't look back at Day 1.</strong> When you're done, note which parts came easily and which were blank. If you got a cue vaguely correct, check its box — we'll bring more precision to recall later.</p>
          `,
          checklist: [
            "Feet — weight even, soles awake",
            "Knees — soft, low back hangs",
            "Pelvis — tailbone hangs heavy",
            "Shoulders — wide, front and back",
            "Chest — drapes between open shoulders",
            "Arms — hang heavy from the shoulders",
            "Head — floats; body hangs beneath"
          ]
        },
        {
          type: "explore", title: "Explore — Feet", duration: null,
          body: `
            <p><span class="lead">Toes (seated).</span> Find a comfortable seat where you can be both relaxed and upright, and inhabit the space of your feet. Curl your toes under, well below max effort, as if to hold a pencil — alternating one foot then the other. Pause and feel your feet. Then spread the toes apart, widening the gap between big toe and pinky, and relax; repeat a few times, staying relaxed everywhere else. Then, starting with one foot, lift all the toes up while the balls of the feet stay down; repeat gently, bring it to the other side, make it smaller. Rest, and notice the contact of your feet with the ground.</p>
            <p><span class="lead">Five lines (standing).</span> Come to standing. Imagine five lines in each foot, running from the tips of the toes back to the heel, lengthening outward and spreading apart — first just the image, then letting the image feed the action. Repeat a few times without gripping the floor (a little bend in the knees helps). It's as if your toes could glide across the ground like a bowling ball over something smooth. Rest.</p>
            <p><span class="lead">Weight, side to side.</span> Put 90% of your weight into the left foot, then tilt 90% into the right — enjoy the sway; a foot may even lift. Slowly, with precision and playfulness, make it smaller: 70/30, 60/40, toward an even sense of the feet — until they settle like two feathers dropped and landing at the same moment.</p>
            <p><span class="lead">Weight, front to back.</span> Same game, rocking forward and back — onto the balls of the feet, then onto the heels. Start big, then shrink it in your own time. Let the whole sole feel awake to the ground, calibrating toward roughly 60% in the heels, 40% in the forefoot. Rest, and feel your feet.</p>
            <p class="cue">Toes spread, weight even, weight slightly back. Repeat that out loud a few times — taking the cues as constraints to explore your way into, not a rigid structure to inhabit.</p>
          `,
          success: "You can sense what it's like to spread the toes without gripping. The weight feels a little more evenly distributed — 50/50 side to side, 60/40 back to front. The sole feels a little more awake. (Directionally correct — not perfect.)"
        },
        {
          type: "explore", title: "Explore — Knees", duration: null,
          body: `
            <p>Lock your knees straight and notice what your lower back does — is it arched? braced? Now bend the knees slowly. Watch for the moment your lower back begins to unhook, losing a little of its curve. That's your depth — usually a little deeper than a casual stand, but nowhere near a squat. Go past it into a squat to feel the difference, then come back up to just that threshold.</p>
            <p>Once you're there, imagine the space between your knees is a balloon inflating sideways — widen until the <em>first hint</em> of resistance, then stop. Imagine your legs have a lively attitude — that if someone nudged you, you could absorb the force through your legs. Let the structure drain down through the ankles into the feet.</p>
            <p class="cue">The knees soften and widen, draining down into the feet. Repeat that out loud a few times, just feeling the region's response.</p>
          `,
          success: "You can feel a slight release in the lower back, or at least sense how the curve changes. The knees have a soft spring, a lightly-alive vibe. If someone nudged you, you'd absorb it through the legs, not just brace with your spine."
        },
        {
          type: "self-narrate", title: "Self-narrate", subtitle: "in your own words", duration: "2:30",
          body: `
            <p>Take the standing position. Talk yourself through feet, then knees, <em>in your own words</em> — out loud. Pretend you're guiding a friend who's never stood like this. When your narration gets vague, get curious about that — it's a sign there's something to learn, and learning can be fun.</p>
          `
        }
      ]
    },

    /* ---------- DAY 3 ---------- */
    {
      id: "day3", kind: "lesson", num: 3,
      listTitle: "Day 3 — Your cooking pot",
      eyebrow: "Day 3 · Hips, Qua & Tailbone",
      title: "Your Cooking Pot",
      oneLiner: "The “cooking pot” of the hips and pelvis. The outer hips open; the qua and tailbone release.",
      context: "Hips, qua & tailbone · the body’s cooking pot",
      segments: [
        {
          type: "recall", title: "Recall first — from memory", duration: null,
          body: `
            <p>Take the standing position. Find <strong>feet,</strong> then <strong>knees,</strong> from memory — run the explorations and cues on your own. Once you have the flavor, drop the exploration and go straight to the cue (toes spread, weight even, ~60% on the heels — skip the rocking and rolling).</p>
          `,
          checklist: [
            "Feet — toes spread, no gripping",
            "Feet — weight even, ~60/40 heels",
            "Knees — soft bend, low back unhooks",
            "Knees — gentle width, drains to feet"
          ]
        },
        {
          type: "explore", title: "Explore — Outer hips", subtitle: "open", duration: null,
          body: `
            <p>Squeeze an imaginary walnut between your butt cheeks. Notice the hip sockets close and tighten — the glutes pull the hip bones together. Do that a few times until it's clear, letting the walnut go each time. Moving on!</p>
            <p>Place your hands on the outsides of your hips (lower than you think — you can usually find the top of the hip bones, the iliac crest, as the firm ridge a few inches below your waist). Without squeezing anything, imagine the hip bones gently pressing your hands <em>outward</em> — the outer hips widening, the sockets getting roomier. Let go of that intention.</p>
            <p class="cue">The hips open and expand. Repeat that out loud a few times, just feeling the region's response.</p>
            <div class="note"><span class="note-label">Note</span>The hips are often easier to sense lying down. If you didn't get much standing, lie on your back with knees up and soles on the ground, and repeat the exploration in semi-supine.</div>
          `,
          success: "A starting sense of what it feels like when the hips feel open vs. closed — a vague sense of the sockets opening. (This may start as just an intention, which is fine for now.)"
        },
        {
          type: "explore", title: "Explore — The qua", subtitle: "release", duration: null,
          body: `
            <p>The <em>qua</em> is the inguinal crease — the fold where the front of the thigh meets the pelvis (the "bikini line").</p>
            <p>While the outer hips stay wide, let that front fold <em>release.</em> Feel as if you're about to sit down onto a high stool — the crease sinks down and back. Or imagine a small weight hanging from your pubic bone, drawing it gently down. Test which image works better for you.</p>
            <p>Now rest a hand on your lower belly, a few inches below the navel. Can you feel it move gently as you breathe? See if you can allow the area to soften. Belly heavy, like a brown bear.</p>
            <p class="cue">The qua releases. Repeat that out loud a few times, just feeling the region's response.</p>
          `,
          success: "The hip crease might feel a little softer and deeper, like there's more room inside the socket. You can start to combine the two cues at the level of intention: hips open, qua releases."
        },
        {
          type: "explore", title: "Explore — The tailbone", subtitle: "hang", duration: null,
          body: `
            <p>First, what we <em>don't</em> want. Tuck your tailbone hard and rest a hand on your lower belly — feel the belly tighten and the sockets close. Release. Now stick your butt out, arching the low back — feel the low back shorten and compress. Release. Go back and forth between the extremes, then make it smaller, more subtle.</p>
            <p>Now, neither: let the tailbone simply <em>hang heavy,</em> like a weight on a string drawing the pelvis toward the floor. Front of the body soft. Back of the body long.</p>
            <p class="cue">The tailbone hangs. Repeat that out loud a few times, just feeling the region's response.</p>
          `,
          success: "You have a felt sense of what we don't want: a dramatic pelvic tilt in either direction. The tailbone may start to feel a little heavy, like clothes hanging over a clothesline. Front soft, back long."
        },
        {
          type: "self-narrate", title: "Self-narrate", subtitle: "in your own words", duration: "2:30",
          body: `
            <p>Take the standing position. Guide yourself through the center in your own words: hips open, qua releases, tailbone hangs.</p>
            <div class="note"><span class="note-label">If the hips or qua feel inaccessible</span>This is common. A Pelvic Clock or Frog Legs Feldenkrais lesson can help — but, as always, an intention-only day still counts.</div>
          `
        }
      ]
    },

    /* ---------- DAY 4 ---------- */
    {
      id: "day4", kind: "lesson", num: 4,
      listTitle: "Day 4 — The parachute",
      eyebrow: "Day 4 · The Trunk",
      title: "Shoulders & Chest",
      oneLiner: "The shoulders open so the chest can hang. The shoulders are the parachute; the chest hangs below.",
      context: "The trunk · the parachute",
      segments: [
        {
          type: "recall", title: "Recall first — from memory", duration: null,
          body: `
            <p>Take the standing position. From memory, run just the center — <strong>hips → qua → tailbone.</strong> Nothing else today.</p>
          `,
          checklist: [
            "Hips — open and expand",
            "Qua — releases down and back",
            "Tailbone — hangs; front soft, back long"
          ]
        },
        {
          type: "explore", title: "Explore — Shoulders", subtitle: "the canopy", duration: null,
          body: `
            <p>Pinch your shoulder blades together hard. Repeat a few times. What direction does your chest move? What happens to the space between the blades? The space closes, the chest puffs out. Let that go. Now round your shoulders forward and notice the opposite.</p>
            <p>Before you find the middle, map the width. With two fingers, slowly trace one collarbone from the center of your chest out to the shoulder, then the other. Feel how wide the shoulder girdle really is — usually wider than you'd think.</p>
            <p>Now, do neither. Picture an inverted T: a line up the center of the spine, and a crossbar across the base of the neck out to both shoulders. Let that crossbar <em>spread</em> — collarbones widening apart in front <em>and</em> shoulder blades widening apart behind, at the same time, until the first hint of resistance. If the back is hard to feel, send a slow breath into the upper back, between the blades.</p>
            <p class="cue">The shoulders spread wide, front and back. Repeat that out loud a few times, just feeling the region's response.</p>
          `,
          success: "You sensed how shoulder position changes the position of the chest. You can intend that the shoulders feel wide across both front and back. Not pinching, not rounding — spreading."
        },
        {
          type: "explore", title: "Explore — Chest", subtitle: "the passenger", duration: null,
          body: `
            <p>The shoulders are the parachute canopy: spread wide, catching air, lifting. The thorax — the chest and ribcage — is the passenger, just hanging below.</p>
            <p>First, map the front. Rest a few fingers on your sternum and slowly walk them from the top, near the collarbones, down to the soft tip at the bottom, sending a small breath into each level: upper, middle, low. The chest isn't a flat wall — it's a structure you can feel and breathe into.</p>
            <p>Now, with the shoulders wide, let the chest <em>sink and drape</em> downward, hanging between them. Let the spine between the blades settle down with it. Send the breath into your <em>back</em> ribs — feel them widen behind you while the front stays soft and heavy.</p>
            <p class="cue">The chest drapes down between the shoulders. Repeat that out loud a few times, just feeling the region's response.</p>
            <div class="note"><span class="note-label">Note</span>Order matters: the shoulders must open <strong>first.</strong> Their spreading is what makes room for the chest to drop. If the chest won't sink, widen the shoulders again.</div>
          `,
          success: "You can combine the two cues: shoulders spread, chest hangs."
        },
        {
          type: "self-narrate", title: "Self-narrate", subtitle: "in your own words", duration: "2:30",
          body: `
            <p>Take the standing position. Guide yourself through the trunk in your own words: shoulders spread (canopy), chest drapes (passenger). If you feel like it, add in the cues for the hips, qua, and tailbone.</p>
          `
        }
      ]
    },

    /* ---------- DAY 5 ---------- */
    {
      id: "day5", kind: "lesson", num: 5,
      listTitle: "Day 5 — Arms & apex",
      eyebrow: "Day 5 · Arms & Apex",
      title: "Arms, Neck & Head",
      oneLiner: "Arms, neck, and head — what hangs, and what floats.",
      context: "Arms & apex · what hangs, what floats",
      segments: [
        {
          type: "recall", title: "Recall first — from memory", duration: null,
          body: `
            <p>Take the standing position. From memory, run <strong>feet → knees,</strong> then <strong>shoulders → chest.</strong></p>
          `,
          checklist: [
            "Feet — toes spread, weight ~60/40 heels",
            "Knees — soft bend, low back unhooks",
            "Shoulders — spread wide, front and back",
            "Chest — drapes between the shoulders"
          ]
        },
        {
          type: "explore", title: "Explore — Arms", subtitle: "hang", duration: null,
          body: `
            <p>Remember what it feels like for your shoulders to spread and inflate. Now float your arms up 6 inches or so — just enough to feel the lift against gravity — then let them drop and hang. Do it again, smaller. How subtle can the lift get before you release it?</p>
            <p>Now let your arms be heavy — elbows hanging out of the open shoulders like water droplets about to fall. If someone lifted your arm and let go, it would drop like dead weight. Let the heaviness run out through the wrists; palms soft and awake, fingers available but not reaching. "Fingernails lively."</p>
            <p class="cue">Heavy elbows hang from open shoulders, fingernails lively. Repeat that out loud a few times, just feeling the region's response.</p>
          `,
          success: "You have a starting sense of inflating the shoulders while the arms are heavy. You can sense a little aliveness (fingernails lively) in the arms."
        },
        {
          type: "explore", title: "Explore — Head & neck", subtitle: "float", duration: null,
          body: `
            <p>First, find what it means to float. Imagine moving underwater, or weightless in space — the whole body suspended in something thicker than air. Move around your room, weightless, suspended, floating.</p>
            <p>Pause, and return to standing. Now feel that your <strong>head</strong> could float — suspended on top of the spine, as if it could lift away — and the whole body hangs beneath it like a coat on a hanger. Release that exploration.</p>
            <p>Now the neck. Nod your head slowly, as if saying a quiet "yes." As you nod forward, notice the muscles along the back of the neck — do they lengthen? Another way in: imagine the skull rotating forward around the hinge of the jaw, just in front of your ears. Either way, the chin softens down a hair and the crown rises. Make the nod smaller and smaller — find the <em>smallest</em> nod where you still feel that lengthening, and rest there.</p>
            <p class="cue">The head floats; the body hangs beneath it. Repeat that out loud a few times, just feeling the region's response.</p>
          `,
          success: "You have a taste of what a floating head would feel like. You can sense some difference between length and contraction along the back of your neck."
        },
        {
          type: "self-narrate", title: "Self-narrate", subtitle: "in your own words", duration: "2:30",
          body: `
            <p>Take the standing position. Guide yourself through the top: heavy elbows hang from open shoulders, lively fingernails, head floating, neck long. If you feel like it, layer in the other cues you remember easily.</p>
          `
        }
      ]
    },

    /* ---------- DAY 6 ---------- */
    {
      id: "day6", kind: "lesson", num: 6,
      listTitle: "Day 6 — Putting it together",
      eyebrow: "Day 6 · Integration",
      title: "Putting It Together",
      oneLiner: "One guided pass through everything, plus being with and finding “the small dance.”",
      context: "Integration · the whole practice + the small dance",
      segments: [
        {
          type: "recall", title: "Recall first — from memory", duration: null,
          body: `
            <p>Take the standing position. Before the guided run, try the whole thing yourself, feet to head, in your own words.</p>
          `,
          checklist: [
            "Feet — toes spread, weight ~60/40 heels",
            "Knees — soft bend, low back unhooks",
            "Hips — open and expand",
            "Qua — releases down and back",
            "Tailbone — hangs; front soft, back long",
            "Shoulders — spread wide, front and back",
            "Chest — drapes between the shoulders",
            "Arms — hang heavy from the shoulders",
            "Head — floats; body hangs beneath; neck long"
          ]
        },
        {
          type: "explore", title: "The full sequence", subtitle: "guided, once", duration: null,
          body: `
            <p><span class="lead">Feet:</span> weight even, slightly back, soles awake. <span class="lead">Knees:</span> soften until the low back hangs; a balloon of width between them.</p>
            <p><span class="lead">Hips:</span> outer hips wide. <span class="lead">Qua:</span> front fold releasing down and back. <span class="lead">Tailbone:</span> hanging heavy — front soft, back long.</p>
            <p><span class="lead">Shoulders:</span> spreading wide, front and back — the canopy. <span class="lead">Chest:</span> draping down between them — the passenger. <span class="lead">Arms:</span> hanging heavy from open shoulders. <span class="lead">Hands:</span> soft, awake.</p>
            <p><span class="lead">Head:</span> floating up; the body hanging beneath it. Neck long.</p>
            <p class="cue">Now stop naming. Stand inside the whole shape for several breaths. Opening upward and outward, releasing downward.</p>
            <div class="note"><span class="note-label">Note</span>A useful option: run all of these cues lying down, in a <strong>semi-supine</strong> position — on your back, head supported, knees up, feet on the ground. This often makes it easier to relax, and the effects become more obvious.</div>
          `
        },
        {
          type: "explore", title: "Being with", subtitle: "no cues", duration: null,
          body: `
            <p>For a couple of minutes, stop adjusting entirely. Don't fix anything. Just <em>be with</em> whatever sensation is here — the weight, the breath, the small shifts — and let it unfold on its own. If you notice a part collapse or tense, you don't have to correct it. Just notice. Assume your body knows what it's doing.</p>
          `
        },
        {
          type: "explore", title: "The small dance", duration: null,
          guidedPlaceholder: "5-min guided audio",
          body: `
            <p>It's impossible to be completely still. As you stand, you can feel the body making tiny, constant adjustments to stay balanced: a faint sway, a micro-correction at the ankles. This "small dance" is always happening. It's a supplemental practice you may find helpful if practice feels effortful, or your joints feel achy.</p>
          `
        },
        {
          type: "self-narrate", title: "Self-narrate", subtitle: "in your own words", duration: "2:30",
          body: `
            <p>Take the standing position. Guide yourself once more through the full sequence, in your own words. Incorporate the small dance if you found it helpful. Have fun — what would it be like to be playful as you do this?</p>
          `
        }
      ]
    },

    /* ---------- DAY 7 ---------- */
    {
      id: "day7", kind: "lesson", num: 7,
      listTitle: "Day 7 — Your turn to cook",
      eyebrow: "Day 7 · Guiding Yourself",
      title: "Your Turn to Cook",
      oneLiner: "You lead. You've tasted the cues; now recall and run the basic practice on your own.",
      context: "Guiding yourself · you lead",
      closing: `In a week you've tasted the essential cues and — more importantly — built the skill that makes practice possible: <strong>guiding yourself.</strong> Where to take it from here: <a href="#/next">Where to go next ›</a>`,
      segments: [
        {
          type: "self-narrate", title: "The practice — you narrate", duration: "2:30",
          body: `
            <p>Take the standing position. Guide yourself through the full sequence in your own words — out loud or silently, as if teaching someone who's never done it: <strong>feet, knees, center (hips / qua / tailbone), trunk (shoulders / chest), arms, head &amp; neck.</strong> Take your time. When you finish, release the cues, and stand simply for a few breath cycles.</p>
          `
        },
        {
          type: "read", title: "The internal dynamic", subtitle: "inhabiting, opening, releasing", duration: null,
          guidedPlaceholder: "guided version",
          body: `
            <p>This is not a static checklist. This exploration helps establish the internal dynamic, so the practice stays alive.</p>
            <p>Do it yourself. Speak aloud if it helps: "opening, releasing… releasing… opening…"</p>
            <p><span class="lead">Listen</span> — inhabit the sensorial space of each region.</p>
            <p><span class="lead">Open what's collapsed</span> — if you notice anything slouched or sunk, allow it to gently inflate.</p>
            <p><span class="lead">Release what's rigid</span> — if you find anything braced or held, let it release down into gravity.</p>
            <p class="cue">Cycle — the more you open, the more you can release; the more you release, the more you can open. That loop is the basic internal dynamic of the practice.</p>
          `
        },
        {
          type: "recall", title: "Self-check", subtitle: "directionally correct", duration: null,
          body: `
            <p>Skim the body once more and note the regions that came easily.</p>
          `,
          revealLabel: "Check the regions that came easily",
          checklist: [
            "Feet", "Knees", "Hips", "Qua", "Tailbone",
            "Shoulders", "Chest", "Arms", "Head & neck"
          ]
        }
      ]
    },

    /* ---------- WHERE TO GO NEXT ---------- */
    {
      id: "next", kind: "article", listTitle: "After — Where to go next",
      context: "After the week · where to take the practice",
      html: `
        <div class="eyebrow clay">After the week</div>
        <h1>Where to Go Next</h1>
        <p>The seven days gave you a taste and the ability to recall the basic practice. From here, recall gets easier, and the work shifts from <em>learning</em> the cues to <em>living</em> in them. A few directions:</p>

        <h2>Keep guiding yourself</h2>
        <p>Narrating yourself through the practice — as if guiding someone else — is the single most reliable way to keep this going, and to keep it <em>yours.</em> It's active recall every time you stand. Lean on it.</p>

        <h2>Consistency over intensity</h2>
        <p class="draft">[Expand: the basic stuff matters most — showing up daily beats long, occasional sessions.]</p>

        <h2>Minimum viable dose</h2>
        <p class="draft">[Expand: the smallest practice that still counts on a busy day, so the habit never breaks.]</p>

        <h2>How to keep improving</h2>
        <p class="draft">[Expand: extending duration; position variations / branching postures; when to bring in supplements; deepening any cue that's still intention-only.]</p>

        <h2>Supplements</h2>
        <p>When a cue stays blank, see the Supplements — Pelvic Clock, Frog Legs, shoulder gliding, breathing lessons, and the somatic baseline practices.</p>
      `
    }
  ]
};
