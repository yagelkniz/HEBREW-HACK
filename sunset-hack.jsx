/* global React */
const { useState, useEffect } = React;

function SunsetHack() {
  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(0);

  return (
    <div style={sunsetStyles.root} className="hh-root" dir="ltr">
      {/* Decorative blobs */}
      <div style={{ ...sunsetStyles.blob, top: -150, left: -100, background: '#FF6B9D' }} />
      <div style={{ ...sunsetStyles.blob, top: 200, right: -180, background: '#FFB347', width: 500, height: 500 }} />
      <div style={{ ...sunsetStyles.blob, bottom: 100, left: -200, background: '#A855F7', width: 450, height: 450 }} />

      {/* NAV */}
      <header style={sunsetStyles.nav}>
        <div style={sunsetStyles.navInner} className="hh-nav-inner">
          <div style={sunsetStyles.logo}>
            <div style={sunsetStyles.logoMark}>ע</div>
            <span>Hebrew<em style={{ color: '#FF6B9D', fontStyle: 'normal' }}>Hack</em></span>
          </div>
          <nav style={sunsetStyles.navLinks} className="hh-nav-links">
            <a href="#why" style={sunsetStyles.navLink}>Why us</a>
            <a href="#compare" style={sunsetStyles.navLink}>Compare</a>
            <a href="#testimonials" style={sunsetStyles.navLink}>Reviews</a>
            <a href="#faq" style={sunsetStyles.navLink}>FAQ</a>
          </nav>
          <a href="#signup" style={sunsetStyles.navCta}>Free trial →</a>
        </div>
      </header>

      {/* HERO */}
      <section style={sunsetStyles.hero} className="hh-hero hh-section">
        <div style={sunsetStyles.heroInner} className="hh-hero-inner">
          <div>
            <div style={sunsetStyles.scribble} className="hh-scribble">shalom, friends 👋</div>
            <h1 style={sunsetStyles.h1} className="hh-h1">
              Speak Hebrew<br />
              <span style={sunsetStyles.h1Accent}>like an Israeli.</span>
            </h1>
            <p style={sunsetStyles.lead} className="hh-lead">
              Live Zoom lessons with Israeli teachers. No textbook, no shame —
              just real conversation from day one.
            </p>
            <div style={sunsetStyles.heroCta}>
              <a href="#signup" style={sunsetStyles.btnPrimary} className="hh-btn">📚 Start free trial</a>
              <div style={sunsetStyles.trust}>
                <span style={sunsetStyles.stars}>★★★★★</span>
                <span><b>4.9</b> from 200+ students</span>
              </div>
            </div>
            <div style={sunsetStyles.statRow} className="hh-stat-row">
              <div><strong>200+</strong><br /><span>students worldwide</span></div>
              <div style={sunsetStyles.sep} />
              <div><strong>30+</strong><br /><span>countries</span></div>
              <div style={sunsetStyles.sep} />
              <div><strong>2</strong><br /><span>native teachers</span></div>
            </div>
          </div>

          <div style={sunsetStyles.heroVisual} className="hh-hero-visual">
            <WhatsAppDemo />
            <div style={sunsetStyles.sticker} className="hh-sticker">
              <em style={{ display: 'block', fontSize: 28, fontStyle: 'normal' }}>1st lesson</em>
              <span>FREE!</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={sunsetStyles.marquee}>
        <div style={sunsetStyles.marqueeTrack} className="hh-marquee-track">
          {['shalom', 'toda', 'bevakasha', 'sababa', 'yalla', 'ḥaval al hazman', 'aḥla', 'betaḥ', 'shalom', 'toda', 'bevakasha', 'sababa', 'yalla', 'ḥaval al hazman', 'aḥla', 'betaḥ'].map((w, i) =>
          <span key={i} style={sunsetStyles.marqueeItem}>✦ {w}</span>
          )}
        </div>
      </div>

      {/* TEACHERS */}
      <section style={sunsetStyles.teachers} className="hh-section">
        <div style={sunsetStyles.wrap}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={sunsetStyles.scribble} className="hh-scribble">meet your teachers</div>
            <h2 style={sunsetStyles.h2} className="hh-h2">Two Israelis.<br /><span style={{ color: '#FF6B9D' }}>One method. Lots of fun.</span></h2>
          </div>
          <div style={sunsetStyles.teacherGrid} className="hh-grid-2">
            <article style={sunsetStyles.teacherCard}>
              <div style={sunsetStyles.teacherPhotoWrap} className="hh-teacher-photo-wrap">
                <img src="assets/eyal.jpg" alt="Eilai - Hebrew teacher from Tel Aviv" style={sunsetStyles.teacherPhoto} />
                <div style={sunsetStyles.teacherTag}>📍 Tel Aviv</div>
                <div style={sunsetStyles.teacherRibbon}>Course creator</div>
              </div>
              <div style={{ padding: '36px 28px 28px' }}>
                <h3 style={{ fontSize: 28, fontWeight: 900, margin: '0 0 4px' }}>EILAI YAGEL</h3>
                <div style={{ color: '#FF6B9D', fontWeight: 700, fontSize: 15, marginBottom: 14 }}>Lead Teacher · Conversation Method</div>
                <p style={{ color: '#5b3a30', margin: '0 0 16px', lineHeight: 1.6 }}>
                  Born and raised in Israel. 8+ years teaching students from around the world to actually
                  speak Hebrew. I teach in <b>English &amp; Spanish</b> — ¡también hablo español! — so we meet
                  you where you are. Hebrew is learned in conversation, not in a textbook.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['🇪🇸 Habla español', 'Israeli slang', 'Daily conversation', 'Beginners', 'Custom plans'].map((t) => <span key={t} style={sunsetStyles.tag}>{t}</span>)}
                </div>
                <div style={sunsetStyles.teacherQuote}>"If you understand 'yalla' — you're already halfway there."</div>
              </div>
            </article>
            <article style={{ ...sunsetStyles.teacherCard, background: 'linear-gradient(180deg,#fff,#FFF1D6)' }}>
              <div style={{ ...sunsetStyles.teacherPhotoWrap, background: 'repeating-linear-gradient(135deg,#FFC4D6 0 12px,#FFA1BD 12px 24px)' }} className="hh-teacher-photo-wrap">
                <div style={sunsetStyles.teacherPlaceholder} aria-label="Lior - Hebrew teacher from Jerusalem">[ Lior's photo ]</div>
                <div style={sunsetStyles.teacherTag}>📍 Jerusalem</div>
                <div style={{ ...sunsetStyles.teacherRibbon, background: '#A855F7', boxShadow: '0 6px 0 #6B21A8' }}>Grammar wizard</div>
              </div>
              <div style={{ padding: '36px 28px 28px' }}>
                <h3 style={{ fontSize: 28, fontWeight: 900, margin: '0 0 4px' }}>Lior ALFANDARI</h3>
                <div style={{ color: '#A855F7', fontWeight: 700, fontSize: 15, marginBottom: 14 }}>Co-Teacher · Grammar & Writing</div>
                <p style={{ color: '#5b3a30', margin: '0 0 16px', lineHeight: 1.6 }}>
                  Lior turns Hebrew grammar — usually called a nightmare — into something clear and even fun.
                  With a linguistics background and academic teaching experience, Lior builds your reading
                  and writing confidence step by step.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Easy grammar', 'Reading & writing', 'Intermediate+', 'Verb patterns'].map((t) => <span key={t} style={sunsetStyles.tag}>{t}</span>)}
                </div>
                <div style={sunsetStyles.teacherQuote}>"Grammar isn't rules — it's a pattern. Once you see the pattern, it flows."</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" style={sunsetStyles.why} className="hh-section">
        <div style={sunsetStyles.wrap}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={sunsetStyles.scribble} className="hh-scribble">why us?</div>
            <h2 style={sunsetStyles.h2} className="hh-h2">Six reasons we're<br /><span style={{ color: '#FF6B9D' }}>different.</span></h2>
          </div>
          <div style={sunsetStyles.whyGrid} className="hh-grid-3">
            {[
            { ic: '🗣️', t: 'Daily Hebrew, not textbook', d: 'No conjugation tables. We teach the Hebrew you\'ll actually use — at the café, with friends, in the taxi. The slang, the cadence, the real thing.', c: '#FF6B9D' },
            { ic: '⏳', t: '8+ years of experience', d: 'Eyal has taught hundreds of students from 30+ countries to actually speak. He knows where you\'ll get stuck — and how to unstick you fast.', c: '#A855F7' },
            { ic: '💸', t: 'Friendly price', d: 'Group lessons from $19. 1-on-1 from $45. No annual contracts, no hidden fees. Pay-as-you-go or save with a package — your choice.', c: '#FFB347' },
            { ic: '🇪🇸', t: 'English & Spanish', d: 'Eyal teaches in both English AND Spanish. ¡También hablamos español! We meet you in the language you\'re strongest in.', c: '#0080FF' },
            { ic: '🎵', t: 'Songs & culture', d: 'Learn through Israeli music, food, holidays, and humor. Because language without culture is just words — and Hebrew has the best stories.', c: '#10B981' },
            { ic: '🎯', t: 'Custom plan per student', d: 'No two students get the same path. We build your plan around your goal — Aliyah, family, work, travel — and adjust as you grow.', c: '#FF6B9D' }].
            map((v, i) =>
            <div key={i} style={sunsetStyles.whyCard}>
                <div style={{ ...sunsetStyles.whyIcon, background: v.c }}>{v.ic}</div>
                <h3 style={sunsetStyles.h3}>{v.t}</h3>
                <p style={{ color: '#5b3a30', margin: 0 }}>{v.d}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* VIDEO + ANIMATED PROOF */}
      <section id="compare" style={sunsetStyles.video} className="hh-section">
        <div style={sunsetStyles.videoBg}>
          {[...Array(20)].map((_, i) => (
            <span key={i} style={{ ...sunsetStyles.floatWord, left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%`, animationDelay: `${(i * 0.7) % 8}s`, fontSize: 18 + (i % 4) * 8, opacity: 0.08 + (i % 3) * 0.04 }}>
              {['שלום','תודה','יאללה','סבבה','אחלה','חבל על הזמן','בטח','בבקשה'][i % 8]}
            </span>
          ))}
        </div>
        <div style={sunsetStyles.wrap}>
          <div style={{ textAlign: 'center', marginBottom: 40, position: 'relative', zIndex: 2 }}>
            <div style={sunsetStyles.scribble} className="hh-scribble">see it in action</div>
            <h2 style={sunsetStyles.h2} className="hh-h2">Watch a real lesson<br/><span style={{ color: '#FF6B9D' }}>or hear from students.</span></h2>
            <p style={{ color: '#5b3a30', fontSize: 18, maxWidth: 580, margin: '14px auto 0' }}>The best way to know if it's right for you? Watch us teach.</p>
          </div>
          <div style={sunsetStyles.videoFrame}>
            <div style={sunsetStyles.videoChrome}>
              <span style={{ ...sunsetStyles.dot, background: '#FF6B6B' }} />
              <span style={{ ...sunsetStyles.dot, background: '#FFD700' }} />
              <span style={{ ...sunsetStyles.dot, background: '#10B981' }} />
              <span style={{ marginLeft: 14, fontFamily: 'monospace', fontSize: 13, color: '#5b3a30' }}>hebrew-hack-lesson.mp4</span>
              <span style={{ marginLeft: 'auto', fontFamily: "'Caveat'", color: '#FF6B9D', fontSize: 18, transform: 'rotate(-2deg)' }}>upload your video here →</span>
            </div>
            <div style={sunsetStyles.videoStage}>
              <div style={sunsetStyles.videoRing}><div style={sunsetStyles.videoRingInner} /></div>
              <div style={sunsetStyles.videoRing2}><div style={sunsetStyles.videoRing2Inner} /></div>
              <button style={sunsetStyles.playBtn} aria-label="Play">
                <span style={sunsetStyles.playTri} />
              </button>
              <div style={sunsetStyles.videoCaption}>
                <span style={{ ...sunsetStyles.greenDot, animation: 'pulse 1.6s ease-in-out infinite' }} />
                <span><b>EILAI</b> · 2 min preview · "your first 5 phrases"</span>
              </div>
              <div style={sunsetStyles.videoTicker}>
                <span style={{ animation: 'scroll 25s linear infinite', display: 'flex', gap: 50, whiteSpace: 'nowrap', fontWeight: 700, fontSize: 16, color: '#fff', opacity: 0.85 }}>
                  {Array(2).fill(0).flatMap((_, k) => [
                    '⭐ "Best Hebrew teacher I\'ve had" — Sarah, NY',
                    '⭐ "Started speaking after 3 lessons" — David, London',
                    '⭐ "Lior makes grammar fun" — Rachel, Melbourne',
                    '⭐ "Felt at home from day one" — Miguel, México',
                  ].map((t, i) => <span key={`${k}-${i}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>{t}</span>))}
                </span>
              </div>
            </div>
            <div style={sunsetStyles.videoStrip} className="hh-video-strip">
              <button style={sunsetStyles.thumbBtn}>
                <div style={{ ...sunsetStyles.thumbDot, background: '#FF6B9D' }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14 }}>Sarah's story</div>
                  <div style={{ fontSize: 12, color: '#7a5a4f' }}>0:48 · NY → fluent</div>
                </div>
              </button>
              <button style={sunsetStyles.thumbBtn}>
                <div style={{ ...sunsetStyles.thumbDot, background: '#A855F7' }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14 }}>David's story</div>
                  <div style={{ fontSize: 12, color: '#7a5a4f' }}>1:12 · London → Tel Aviv</div>
                </div>
              </button>
              <button style={sunsetStyles.thumbBtn}>
                <div style={{ ...sunsetStyles.thumbDot, background: '#FFB347' }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14 }}>Rachel's story</div>
                  <div style={{ fontSize: 12, color: '#7a5a4f' }}>0:55 · reading her grandfather</div>
                </div>
              </button>
              <button style={{ ...sunsetStyles.thumbBtn, background: 'rgba(255,107,157,.1)', borderStyle: 'dashed', color: '#FF6B9D' }}>
                <div style={{ ...sunsetStyles.thumbDot, background: '#FF6B9D', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 900 }}>+</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14 }}>Add your video</div>
                  <div style={{ fontSize: 12, opacity: .7 }}>upload .mp4 · drop here</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section style={sunsetStyles.leadMagnet} className="hh-section">
        <div style={sunsetStyles.wrap}>
          <div style={sunsetStyles.leadGrid} className="hh-grid-2">
            <div>
              <div style={sunsetStyles.scribble} className="hh-scribble">free download · for new sign-ups</div>
              <h2 style={sunsetStyles.h2} className="hh-h2">Get the<br /><span style={{ color: '#FF6B9D' }}>50 Hebrew Phrases</span><br />every Israeli uses.</h2>
              <p style={{ color: '#5b3a30', fontSize: 18, lineHeight: 1.6, margin: '18px 0 28px', maxWidth: 480 }}>
                A printable PDF cheat sheet with the slang, greetings, and survival phrases that
                will get you 80% of the way through any Israeli interaction. Free for everyone
                who books a trial lesson.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', color: '#1B1B1F', fontSize: 16, lineHeight: 1.8 }}>
                <li>✓ 50 essential phrases — Hebrew, transliteration, English</li>
                <li>✓ When to use each one (with examples)</li>
                <li>✓ Pronunciation audio links</li>
                <li>✓ Bonus: 10 phrases that make you sound like a local</li>
              </ul>
              <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
                <a href="assets/HebrewHack_Complete_Guide.pdf" target="_blank" style={sunsetStyles.btnPrimary} className="hh-btn">📄 Preview the PDF →</a>
                <a href="assets/HebrewHack_Complete_Guide.pdf" download style={{...sunsetStyles.btnPrimary, background:'#1B1B1F', boxShadow:'0 6px 0 #000'}} className="hh-btn">⬇ Download free</a>
              </div>
            </div>
            <div style={sunsetStyles.pdfMockWrap}>
              <div style={sunsetStyles.pdfMock}>
                <div style={{ padding: '24px 28px 18px', borderBottom: '2px dashed #FFD700' }}>
                  <div style={{ fontFamily: "'Caveat'", color: '#FF6B9D', fontSize: 18 }}>Hebrew Hack · cheat sheet</div>
                  <div style={{ fontSize: 22, fontWeight: 900, marginTop: 4, color: '#1B1B1F' }}>50 Phrases Every Israeli Uses</div>
                </div>
                <div style={{ padding: '18px 28px' }}>
                  {[
                  { h: 'מה נשמע?', t: 'ma nishma?', e: "What's up?" },
                  { h: 'סבבה לגמרי', t: 'sababa legamrey', e: 'Totally cool' },
                  { h: 'יאללה ביי', t: 'yalla bye', e: 'See ya!' },
                  { h: 'חבל על הזמן', t: "ḥaval al ha'zman", e: 'Amazing!' },
                  { h: 'אחלה', t: 'aḥla', e: 'Awesome' }].
                  map((r, i) =>
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '7px 0', borderBottom: '1px dashed rgba(0,0,0,.08)' }}>
                      <div>
                        <span style={{ fontSize: 18, fontWeight: 700 }}>{r.h}</span>
                        <span style={{ fontFamily: "'Caveat'", color: '#FF6B9D', marginLeft: 10, fontSize: 15 }}>{r.t}</span>
                      </div>
                      <span style={{ fontSize: 13, color: '#5b3a30' }}>{r.e}</span>
                    </div>
                  )}
                  <div style={{ textAlign: 'center', color: '#999', fontSize: 12, marginTop: 14, fontStyle: 'italic' }}>... 45 more on the inside ...</div>
                </div>
              </div>
              <div style={sunsetStyles.pdfStamp} className="hh-pdf-stamp">FREE</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={sunsetStyles.testimonials} className="hh-section">
        <div style={sunsetStyles.wrap}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={sunsetStyles.scribble} className="hh-scribble">students say · live feed</div>
            <h2 style={sunsetStyles.h2} className="hh-h2">Don't take our word.<br /><span style={{ color: '#FF6B9D' }}>Read theirs.</span></h2>
            <p style={{ color: '#5b3a30', fontSize: 16, margin: '14px auto 0', maxWidth: 580 }}>Real reviews from our students — half about Eilai, half about Lior.</p>
          </div>
          <TestimonialsRotator />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={sunsetStyles.faq} className="hh-section">
        <div style={sunsetStyles.wrapNarrow}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={sunsetStyles.scribble} className="hh-scribble">questions?</div>
            <h2 style={sunsetStyles.h2} className="hh-h2">You're not the<br /><span style={{ color: '#FF6B9D' }}>first to ask.</span></h2>
          </div>
          {[
          { q: 'I\'m a total beginner. Can I really start speaking?', a: 'Yes — that\'s exactly who this is for. We start where you are. By lesson 3, most beginners can introduce themselves and order food in Hebrew.' },
          { q: '¿Hablas español? Can I learn in Spanish?', a: '¡Sí! EILAI teaches in both English AND Spanish. If Spanish is your stronger language, just say so when you sign up — we\'ll match you to a Spanish-language track. ¡Bienvenidos!' },
          { q: 'How is the lesson plan personalized?', a: 'On your trial we map out your goal — Aliyah, family, work, travel, heritage — and your starting level. Eyal builds a plan around YOU, including which songs, slang, and scenarios to focus on. We adjust as you grow.' },
          { q: 'How does the trial lesson work?', a: 'You sign up, pick a time, and meet one of us 1-on-1 on Zoom for 30 minutes. We\'ll chat, gauge your level, and you decide if it\'s for you. No card, no commitment — and you get the 50-phrase PDF either way.' },
          { q: '1-on-1 or small groups — which should I pick?', a: '1-on-1 is faster and totally personalized. Small groups (4–6) are more affordable, more social, and a lot of fun. Most students start in groups and add 1-on-1 later.' },
          { q: 'How much does it cost after the trial?', a: 'Group lessons start at $19/lesson. 1-on-1 starts at $45/lesson. Packages bring it down further. Way friendlier than most tutors — we\'ll discuss in your trial.' }].
          map((f, i) =>
          <div key={i} style={sunsetStyles.faqItem} onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)}>
              <div style={sunsetStyles.faqQ}>
                <span>{f.q}</span>
                <span style={{ transform: openFAQ === i ? 'rotate(45deg)' : 'none', transition: 'transform .2s', fontSize: 24, color: '#FF6B9D' }}>+</span>
              </div>
              {openFAQ === i && <div style={sunsetStyles.faqA}>{f.a}</div>}
            </div>
          )}
        </div>
      </section>

      {/* SIGNUP */}
      <section id="signup" style={sunsetStyles.signup} className="hh-section">
        <div style={sunsetStyles.wrap}>
          <div style={sunsetStyles.signupCard} className="hh-signup-card">
            <div style={{ ...sunsetStyles.scribble, color: '#FFD700' }} className="hh-scribble">free trial lesson</div>
            <h2 style={{ ...sunsetStyles.h2, color: '#fff' }} className="hh-h2">Let's meet 👋</h2>
            <p style={{ color: 'rgba(255,255,255,.85)', fontSize: 18 }}>Drop your details. We'll be in touch within 24h with a trial slot — and email you the <b style={{ color: '#FFD700' }}>50 Phrases PDF</b> right away.</p>

            {!submitted ?
            <form style={sunsetStyles.form} className="hh-form" onSubmit={(e) => {e.preventDefault();setSubmitted(true);}}>
                <div>
                  <label style={sunsetStyles.label}>Full name</label>
                  <input style={sunsetStyles.input} placeholder="Your name" required />
                </div>
                <div>
                  <label style={sunsetStyles.label}>Email</label>
                  <input style={sunsetStyles.input} type="email" placeholder="you@email.com" required />
                </div>
                <div>
                  <label style={sunsetStyles.label}>Hebrew level</label>
                  <select style={sunsetStyles.input}>
                    <option>Total beginner</option>
                    <option>A few words</option>
                    <option>Read/write, can't speak</option>
                    <option>Speak but want to improve</option>
                  </select>
                </div>
                <div>
                  <label style={sunsetStyles.label}>Your goal</label>
                  <select style={sunsetStyles.input}>
                    <option>Daily conversation</option>
                    <option>Trip / Aliyah</option>
                    <option>Family connection</option>
                    <option>Work / professional</option>
                    <option>Culture / heritage</option>
                  </select>
                </div>
                <button style={sunsetStyles.submit} className="hh-submit" type="submit">Book my free trial</button>
              </form> :

            <div style={{ padding: '40px 0', textAlign: 'center' }}>
                <div style={{ fontSize: 60 }}>🎉</div>
                <h3 style={{ ...sunsetStyles.h3, color: '#fff', marginTop: 12 }}>Got it! We'll be in touch soon.</h3>
                <p style={{ color: 'rgba(255,255,255,.85)' }}>Check your email — we sent you 3 phrases every Israeli uses.</p>
              </div>
            }

            <div style={sunsetStyles.perks}>
              <span><span style={{ color: '#10B981', fontWeight: 900 }}>✓</span> No credit card</span>
              <span><span style={{ color: '#10B981', fontWeight: 900 }}>✓</span> Cancel anytime</span>
              <span><span style={{ color: '#10B981', fontWeight: 900 }}>✓</span> 1-on-1 or group</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={sunsetStyles.foot}>
        <h3 style={{ color: '#fff', fontSize: 24, margin: '0 0 8px' }}>Ready to speak Hebrew?</h3>
        <p style={{ margin: '0 0 14px', opacity: .9 }}>Join hundreds of students already doing it.</p>
        <div style={{ fontSize: 32 }}>🇮🇱</div>
        <small style={{ display: 'block', opacity: .85, marginTop: 12, fontSize: 13 }}>© 2026 Hebrew Hack · made with love in Israel</small>
      </footer>
    </div>);

}

const sunsetStyles = {
  root: {
    fontFamily: "'Rubik', system-ui, sans-serif",
    background: 'linear-gradient(180deg, #FFF5E1 0%, #FFE4D6 50%, #FFD0E0 100%)',
    color: '#1B1B1F', position: 'relative', overflow: 'hidden', minHeight: '100%',
    width: '100%', maxWidth: '100%'
  },
  blob: { position: 'absolute', width: 400, height: 400, borderRadius: '50%', filter: 'blur(80px)', opacity: .5, pointerEvents: 'none' },

  nav: { position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,245,225,.85)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(0,0,0,.06)' },
  navInner: { maxWidth: 1180, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  logo: { display: 'flex', alignItems: 'center', gap: 10, fontWeight: 900, fontSize: 22 },
  logoMark: { width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg,#FF6B9D,#FFB347)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: 22, transform: 'rotate(-4deg)', boxShadow: '0 4px 0 #C2185B' },
  navLinks: { display: 'flex', gap: 28, fontWeight: 600, color: '#5b3a30' },
  navLink: { textDecoration: 'none', color: 'inherit' },
  navCta: { background: '#1B1B1F', color: '#fff', padding: '10px 18px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' },

  hero: { padding: '60px 24px 100px', position: 'relative', zIndex: 1 },
  heroInner: { maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 60, alignItems: 'center' },
  scribble: { fontFamily: "'Caveat', cursive", color: '#E0457B', fontSize: 28, transform: 'rotate(-3deg)', display: 'inline-block', marginBottom: 8 },
  h1: { fontSize: 72, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-.02em', margin: '0 0 16px' },
  h1Accent: { background: 'linear-gradient(90deg,#FF6B9D,#FFB347,#A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
  lead: { fontSize: 20, color: '#5b3a30', lineHeight: 1.6, maxWidth: 520 },
  heroCta: { display: 'flex', gap: 20, alignItems: 'center', margin: '28px 0 0', flexWrap: 'wrap' },
  btnPrimary: { display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg,#FF6B9D,#A855F7)', color: '#fff', fontWeight: 800, fontSize: 18, padding: '18px 28px', borderRadius: 16, boxShadow: '0 8px 0 #7C2D5C, 0 16px 30px rgba(255,107,157,.4)', textDecoration: 'none' },
  trust: { display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#5b3a30' },
  stars: { color: '#F59E0B', letterSpacing: 2 },
  statRow: { display: 'flex', gap: 24, marginTop: 32, alignItems: 'center' },
  sep: { width: 1, height: 40, background: 'rgba(0,0,0,.15)' },

  heroVisual: { position: 'relative', minHeight: 480 },
  sticker: { position: 'absolute', bottom: -10, left: -16, width: 120, padding: '14px 16px', background: '#FFD700', borderRadius: 18, fontFamily: "'Caveat'", fontWeight: 700, textAlign: 'center', lineHeight: 1, boxShadow: '0 12px 24px rgba(217,119,6,.4)', zIndex: 5, animation: 'stickerWiggle 2.6s ease-in-out infinite', transformOrigin: 'center' },
  lessonCard: { position: 'absolute', inset: '20px 40px 80px 0', background: 'linear-gradient(180deg,#fff,#FFFAF0)', borderRadius: 22, boxShadow: '0 20px 50px rgba(0,0,0,.12)', padding: 22, transform: 'rotate(-2deg)' },
  lessonHead: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, fontWeight: 800, fontSize: 13, color: '#5b3a30', letterSpacing: '.04em' },
  greenDot: { width: 10, height: 10, borderRadius: '50%', background: '#10B981' },
  lessonRow: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '1px dashed rgba(0,0,0,.08)', padding: '10px 0' },
  heb: { fontSize: 24, fontWeight: 700 },
  translit: { color: '#E0457B', fontFamily: "'Caveat'", fontSize: 18 },
  meaning: { color: '#5b3a30', fontSize: 14 },
  chatCard: { position: 'absolute', bottom: 0, left: 60, width: '70%', background: '#fff', borderRadius: 22, boxShadow: '0 20px 50px rgba(0,0,0,.12)', padding: 18, transform: 'rotate(3deg)' },
  chatThem: { background: '#F1F1F4', padding: '10px 14px', borderRadius: 16, borderTopLeftRadius: 4, fontWeight: 600, fontSize: 15, marginBottom: 8, display: 'inline-block', maxWidth: '85%' },
  chatYou: { background: 'linear-gradient(135deg,#FF6B9D,#A855F7)', color: '#fff', padding: '10px 14px', borderRadius: 16, borderTopRightRadius: 4, fontWeight: 600, fontSize: 15, marginLeft: 'auto', display: 'block', maxWidth: '85%', width: 'fit-content' },

  marquee: { background: '#1B1B1F', color: '#fff', padding: '18px 0', overflow: 'hidden', borderTop: '4px solid #FFB347', borderBottom: '4px solid #FF6B9D' },
  marqueeTrack: { display: 'flex', gap: 60, whiteSpace: 'nowrap', animation: 'scroll 30s linear infinite', fontWeight: 800, fontSize: 22 },
  marqueeItem: { display: 'inline-flex', alignItems: 'center', gap: 14 },

  teachers: { padding: '100px 24px', background: '#fff', position: 'relative', zIndex: 1 },
  teacherGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 },
  teacherCard: { background: 'linear-gradient(180deg,#fff,#FFFAF0)', borderRadius: 28, overflow: 'hidden', boxShadow: '0 8px 0 rgba(217,119,6,.18), 0 24px 50px rgba(0,0,0,.08)', border: '1px solid rgba(217,119,6,.12)' },
  teacherPhotoWrap: { aspectRatio: '4/3', background: 'repeating-linear-gradient(135deg,#FFD700 0 12px,#FFB347 12px 24px)', position: 'relative', display: 'grid', placeItems: 'center', overflow: 'hidden' },
  teacherPhoto: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  teacherPlaceholder: { background: 'rgba(255,255,255,.85)', border: '2px dashed rgba(0,0,0,.25)', padding: '14px 18px', borderRadius: 12, fontFamily: 'monospace', fontSize: 13, color: '#5b3a30', fontWeight: 600 },
  teacherTag: { position: 'absolute', top: 14, left: 14, background: '#fff', padding: '6px 12px', borderRadius: 999, fontWeight: 700, fontSize: 13, boxShadow: '0 4px 12px rgba(0,0,0,.1)' },
  teacherRibbon: { position: 'absolute', bottom: -16, right: 24, background: '#FF6B9D', color: '#fff', padding: '8px 14px', borderRadius: 12, fontWeight: 800, fontSize: 14, transform: 'rotate(-3deg)', boxShadow: '0 6px 0 #C2185B' },
  tag: { background: '#FFF1D6', color: '#D97706', padding: '6px 12px', borderRadius: 999, fontWeight: 700, fontSize: 13 },
  teacherQuote: { marginTop: 18, padding: '14px 16px', borderRadius: 14, background: '#FFF5E1', borderLeft: '4px solid #FFB347', fontFamily: "'Caveat'", fontSize: 22, color: '#1B1B1F', lineHeight: 1.3 },

  why: { padding: '100px 24px', background: '#FFF8E7', position: 'relative', zIndex: 1 },
  whyGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 },
  whyCard: { background: '#fff', borderRadius: 24, padding: 28, border: '1px solid rgba(217,119,6,.12)', boxShadow: '0 4px 0 rgba(217,119,6,.1)' },
  whyIcon: { width: 56, height: 56, borderRadius: 16, display: 'grid', placeItems: 'center', fontSize: 28, marginBottom: 18, color: '#fff', boxShadow: '0 6px 0 rgba(0,0,0,.08)' },

  compare: { padding: '100px 24px', background: 'linear-gradient(180deg,#FFF8E7,#FFE4D6)' },

  video: { padding: '100px 24px', background: 'linear-gradient(180deg,#FFF8E7,#FFE4D6)', position: 'relative', overflow: 'hidden' },
  videoBg: { position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 },
  floatWord: { position: 'absolute', fontFamily: "'Rubik'", fontWeight: 900, color: '#FF6B9D', animation: 'floaty 8s ease-in-out infinite', whiteSpace: 'nowrap' },
  videoFrame: { position: 'relative', zIndex: 2, background: '#fff', borderRadius: 28, border: '3px solid #1B1B1F', boxShadow: '12px 12px 0 #FFD700', overflow: 'hidden', maxWidth: 1100, margin: '0 auto' },
  videoChrome: { display: 'flex', alignItems: 'center', gap: 6, padding: '14px 20px', borderBottom: '2px solid #1B1B1F', background: '#FFF5E1' },
  dot: { width: 12, height: 12, borderRadius: '50%' },
  videoStage: { position: 'relative', aspectRatio: '16/9', background: 'linear-gradient(135deg,#1B1B1F 0%, #5b3a30 50%, #A855F7 100%)', display: 'grid', placeItems: 'center', overflow: 'hidden' },
  videoRing: { position: 'absolute', width: 280, height: 280, borderRadius: '50%', border: '3px solid rgba(255,215,0,.3)', animation: 'pulse-ring 3s ease-out infinite' },
  videoRingInner: { position: 'absolute', inset: 30, borderRadius: '50%', border: '3px solid rgba(255,107,157,.4)', animation: 'pulse-ring 3s ease-out infinite .8s' },
  videoRing2: { position: 'absolute', width: 460, height: 460, borderRadius: '50%', border: '2px dashed rgba(255,255,255,.15)', animation: 'spin 40s linear infinite' },
  videoRing2Inner: { position: 'absolute', top: -8, left: '50%', width: 16, height: 16, borderRadius: '50%', background: '#FFD700', boxShadow: '0 0 20px #FFD700' },
  playBtn: { position: 'relative', zIndex: 3, width: 110, height: 110, borderRadius: '50%', background: 'linear-gradient(135deg,#FF6B9D,#FFB347)', border: '4px solid #fff', cursor: 'pointer', display: 'grid', placeItems: 'center', boxShadow: '0 12px 40px rgba(0,0,0,.4), 0 0 0 0 rgba(255,107,157,.5)', animation: 'glow 2s ease-in-out infinite' },
  playTri: { width: 0, height: 0, borderLeft: '28px solid #fff', borderTop: '18px solid transparent', borderBottom: '18px solid transparent', marginLeft: 6 },
  videoCaption: { position: 'absolute', top: 20, left: 20, display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(0,0,0,.5)', backdropFilter: 'blur(8px)', color: '#fff', padding: '8px 14px', borderRadius: 999, fontSize: 13, zIndex: 4 },
  videoTicker: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 0', background: 'linear-gradient(180deg, transparent, rgba(0,0,0,.6))', overflow: 'hidden', zIndex: 4 },
  videoStrip: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, padding: 18, background: '#FFF5E1', borderTop: '2px solid #1B1B1F' },
  thumbBtn: { display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: '#fff', border: '2px solid #1B1B1F', borderRadius: 14, cursor: 'pointer', textAlign: 'left', color: '#1B1B1F', fontFamily: 'inherit', boxShadow: '4px 4px 0 rgba(217,119,6,.2)' },
  thumbDot: { width: 36, height: 36, borderRadius: 10, flexShrink: 0 },
  compareTable: { background: '#fff', borderRadius: 20, overflow: 'hidden', border: '2px solid #1B1B1F', boxShadow: '8px 8px 0 #FFD700' },
  compareRow: { display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', padding: '16px 20px', borderBottom: '1px solid rgba(0,0,0,.08)', alignItems: 'center', fontSize: 14 },
  compareHeader: { background: '#1B1B1F', color: '#fff', fontWeight: 800, fontSize: 14, textTransform: 'uppercase', letterSpacing: '.05em' },
  compareUs: { background: 'linear-gradient(135deg,#FF6B9D,#FFB347)', color: '#fff', fontWeight: 800, padding: '10px 14px', borderRadius: 10, textAlign: 'center', boxShadow: '0 4px 0 rgba(217,119,6,.3)' },
  compareBad: { color: '#DC2626', fontWeight: 600, fontSize: 14, opacity: .85 },
  compareOk: { color: '#10B981', fontWeight: 700, fontSize: 14 },
  compareMeh: { color: '#999', fontSize: 14 },

  leadMagnet: { padding: '100px 24px', background: '#fff' },
  leadGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' },
  pdfMockWrap: { position: 'relative', perspective: '1200px' },
  pdfMock: { background: '#fff', borderRadius: 8, boxShadow: '0 30px 60px rgba(0,0,0,.18), 0 8px 0 rgba(217,119,6,.15)', border: '1px solid rgba(0,0,0,.08)', transform: 'rotate(-2deg)', overflow: 'hidden' },
  pdfStamp: { position: 'absolute', top: -20, right: -10, width: 96, height: 96, borderRadius: '50%', background: '#FFD700', color: '#1B1B1F', fontWeight: 900, fontSize: 22, display: 'grid', placeItems: 'center', transform: 'rotate(15deg)', boxShadow: '0 12px 28px rgba(217,119,6,.4)', border: '3px solid #fff' },
  wrap: { maxWidth: 1180, margin: '0 auto' },
  wrapNarrow: { maxWidth: 760, margin: '0 auto' },
  h2: { fontSize: 48, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-.02em', margin: '0 0 12px' },
  h3: { fontSize: 22, fontWeight: 900, margin: '0 0 8px' },
  whyGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 },
  whyCard: { background: '#FFF5E1', borderRadius: 24, padding: 32, border: '1px solid rgba(217,119,6,.12)' },
  whyIcon: { width: 56, height: 56, borderRadius: 16, display: 'grid', placeItems: 'center', fontSize: 28, marginBottom: 18, color: '#fff', boxShadow: '0 6px 0 rgba(0,0,0,.08)' },

  testimonials: { padding: '100px 24px', background: 'linear-gradient(180deg,#FFE4D6,#FFD0E0)', position: 'relative', zIndex: 1 },
  testGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 },
  testCard: { background: '#fff', padding: 28, borderRadius: 22, boxShadow: '0 4px 0 rgba(217,119,6,.15), 0 16px 30px rgba(0,0,0,.06)' },
  testCardFeat: { background: '#1B1B1F', color: '#fff', padding: 28, borderRadius: 22, boxShadow: '0 16px 40px rgba(0,0,0,.2)' },
  avatar: { width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,#FFB347,#FF6B9D)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: 14 },

  faq: { padding: '100px 24px', background: '#FFF5E1', position: 'relative', zIndex: 1 },
  faqItem: { background: '#fff', borderRadius: 16, padding: '20px 24px', marginBottom: 12, cursor: 'pointer', border: '2px solid transparent', transition: 'border-color .15s' },
  faqQ: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 800, fontSize: 18 },
  faqA: { marginTop: 12, color: '#5b3a30', fontSize: 16, lineHeight: 1.6 },

  signup: { padding: '100px 24px', background: 'linear-gradient(135deg,#A855F7,#FF6B9D 50%,#FFB347)', position: 'relative', zIndex: 1, overflow: 'hidden' },
  signupCard: { background: 'rgba(255,255,255,.1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.2)', borderRadius: 32, padding: 48, maxWidth: 720, margin: '0 auto', textAlign: 'center', color: '#fff' },
  form: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 28, textAlign: 'left' },
  label: { display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: 'rgba(255,255,255,.9)' },
  input: { width: '100%', padding: '14px 16px', borderRadius: 12, background: 'rgba(255,255,255,.95)', border: '2px solid transparent', fontFamily: 'inherit', fontSize: 16, color: '#1B1B1F', boxSizing: 'border-box' },
  submit: { gridColumn: '1/-1', background: '#FFD700', color: '#1B1B1F', padding: 18, borderRadius: 14, fontWeight: 900, fontSize: 18, border: 0, cursor: 'pointer', boxShadow: '0 6px 0 #B8860B' },
  perks: { display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24, fontSize: 14, color: 'rgba(255,255,255,.9)' },

  foot: { background: '#1B1B1F', padding: '40px 24px', color: '#fff', textAlign: 'center' }
};

// ============ TESTIMONIALS ROTATOR ============
const TESTIMONIALS = [
  // Eilai
  { t: 'Eilai', n: 'Nadia', d: 'Mar 13, 2026', q: "Eilai has been such a great tutor! He has adjusted lessons to match my needs, checked in with me at the end of each class and is helping me feel more confident in the language!" },
  { t: 'Eilai', n: 'Zev', d: 'Mar 18, 2026', q: 'Amazing lessons! He is super engaging and able to easily adapt to the student\'s priorities.' },
  { t: 'Eilai', n: 'Almut', d: 'Oct 29, 2025', q: "Eilai is my 10-year-old daughter's Hebrew tutor, and we're happy to have found him. He's very supportive — patiently encouraging her to become more confident in reading and speaking. Highly recommended!" },
  { t: 'Eilai', n: 'Noa', d: 'Oct 23, 2025', q: 'Eilai is a very nice teacher. His lessons are individually tailored and interactive, so you never get bored. Learning with him is always fun and you can see quick results.' },
  { t: 'Eilai', n: 'David', d: 'Oct 15, 2025', q: "Eilai is a very clever teacher. He judged my prior knowledge and helped me move on to a higher level. The time spent in every lesson seems to go by very quickly. He's patient, competent." },
  { t: 'Eilai', n: 'Maya', d: 'Jun 10, 2025', q: 'Eilai is a great tutor who focuses on what you want to learn and how you can improve by always pushing you to your limits in the best way possible. Each class is unique and special.' },
  { t: 'Eilai', n: 'Jessica', d: 'May 22, 2025', q: 'Eilai is a fantastic tutor! He tailors the lesson to what I need, instead of using generic lessons for all his students. He checks in with me to see how I\'m feeling and adjusts.' },
  { t: 'Eilai', n: 'Natalia', d: 'Mar 25, 2025', q: "I highly recommend Eilai! The lessons are relaxed and enjoyable, yet I can clearly see my progress. The atmosphere is easygoing, but everything is structured." },
  { t: 'Eilai', n: 'Ilya', d: 'Mar 10, 2025', q: 'An excellent Hebrew tutor! Teaches in a way that makes learning natural and engaging. The lessons focus on both speaking and reading. Patient, encouraging, motivating.' },
  { t: 'Eilai', n: 'Pavel', d: 'Feb 25, 2025', q: 'Eilai is an excellent teacher — always friendly and in a positive mood. He engages in conversations on various topics and adapts the lesson structure to the students\' needs.' },
  { t: 'Eilai', n: 'Bruno', d: 'Feb 7, 2025', q: 'Eilai is an awesome teacher — he makes sure you are comfortable to speak, being patient and very respectful. He keeps lessons interesting and fun.' },
  // Lior
  { t: 'Lior', n: 'Aaron', d: 'Dec 19, 2025', q: 'Lior is an absolutely incredible Hebrew tutor and I would highly recommend her to anyone.' },
  { t: 'Lior', n: 'Micah', d: 'Dec 1, 2025', q: 'Lior is the best! She met me where I was at, right off the bat, and had great ideas for helping me fix the gaps in my knowledge/grammar. Love learning with her — Thank you Lior!' },
  { t: 'Lior', n: 'Ekaterina', d: 'Oct 23, 2025', q: "I've been enjoying our lessons with Lior for 3 months and my Hebrew is getting better. A wonderful empathetic teacher — reasonable homework, lots of new info, and lots of speaking practice." },
  { t: 'Lior', n: 'Rabbi Adam', d: 'Aug 12, 2025', q: "It's always good, interactive learning time. Lior involves me in creating the lesson plans, listens as I share where I struggle, and then makes sure I understand. Terrific!" },
  { t: 'Lior', n: 'Merav', d: 'Jun 23, 2025', q: 'Lior arrives prepared to each lesson. She is able to quickly adjust to meet the learning style of the student and is extremely creative in her delivery. Excellent teacher.' },
  { t: 'Lior', n: 'Paul', d: 'Jun 22, 2025', q: "What a great teacher! She is extremely professional and uses great methods so that every lesson is fun. So patient and understanding — I'm surprised how much I know after 2 lessons." },
  { t: 'Lior', n: 'Sasha', d: 'Jun 10, 2025', q: 'Lior is a great tutor! Every time I come to our lessons, my brain wakes up and starts working. She explains everything clearly and patiently — important for beginners like me.' },
  { t: 'Lior', n: 'Emma', d: 'Jun 8, 2025', q: 'Lior is a very patient and professional teacher. She identified my needs and planned a personalised lesson to help me improve my weak points in Hebrew. Highly recommend!' },
  { t: 'Lior', n: 'Ellen', d: 'Jun 4, 2025', q: 'Lior is a great teacher! My Hebrew has improved lots in just a few lessons. She carefully plans each session based on my goals and preferences. Professional, patient, clear.' },
  { t: 'Lior', n: 'Jonathan', d: 'Jun 3, 2025', q: "I've really enjoyed learning with Lior. She's fun, helpful, and supportive." },
  { t: 'Lior', n: 'Xenia', d: 'Aug 13, 2025', q: 'Lior is an excellent Hebrew teacher — she is attentive, patient, and able to explain complex things in a simple and clear way :)' }
];

function TestimonialsRotator() {
  const [filter, setFilter] = React.useState('all');
  const [page, setPage] = React.useState(0);
  const list = filter === 'all' ? TESTIMONIALS : TESTIMONIALS.filter(t => t.t === filter);
  const perPage = 3;
  const totalPages = Math.ceil(list.length / perPage);
  const visible = list.slice(page * perPage, page * perPage + perPage);

  React.useEffect(() => { setPage(0); }, [filter]);
  React.useEffect(() => {
    const id = setInterval(() => setPage(p => (p + 1) % totalPages), 5000);
    return () => clearInterval(id);
  }, [totalPages]);

  const teacherColor = (who) => who === 'Eilai' ? '#FF6B9D' : '#A855F7';

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 28, flexWrap: 'wrap' }}>
        {[
          { k: 'all', label: `All (${TESTIMONIALS.length})`, c: '#1B1B1F' },
          { k: 'Eilai', label: `Eilai (${TESTIMONIALS.filter(t => t.t === 'Eilai').length})`, c: '#FF6B9D' },
          { k: 'Lior', label: `Lior (${TESTIMONIALS.filter(t => t.t === 'Lior').length})`, c: '#A855F7' }
        ].map(b => (
          <button key={b.k} onClick={() => setFilter(b.k)} style={{
            padding: '10px 20px', borderRadius: 999, border: '2px solid ' + b.c,
            background: filter === b.k ? b.c : '#fff', color: filter === b.k ? '#fff' : b.c,
            fontWeight: 800, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', transition: 'all .15s'
          }}>{b.label}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="hh-grid-3" key={page + filter}>
        {visible.map((t, i) => (
          <div key={i} style={{
            background: i === 1 ? '#1B1B1F' : '#fff',
            color: i === 1 ? '#fff' : '#1B1B1F',
            padding: 28, borderRadius: 22,
            boxShadow: i === 1 ? '0 16px 40px rgba(0,0,0,.2)' : '0 4px 0 rgba(217,119,6,.15), 0 16px 30px rgba(0,0,0,.06)',
            animation: 'fadeUp .55s ease both',
            animationDelay: (i * 0.08) + 's',
            display: 'flex', flexDirection: 'column'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <span style={{ color: '#F59E0B', letterSpacing: 2, fontSize: 18 }}>★★★★★</span>
              <span style={{
                fontSize: 11, fontWeight: 800, padding: '4px 10px', borderRadius: 999,
                background: teacherColor(t.t), color: '#fff', textTransform: 'uppercase', letterSpacing: '.05em'
              }}>about {t.t}</span>
            </div>
            <blockquote style={{ margin: '0 0 20px', fontSize: 15, lineHeight: 1.6, fontWeight: 500, flex: 1 }}>"{t.q}"</blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 14, borderTop: i === 1 ? '1px solid rgba(255,255,255,.15)' : '1px solid rgba(0,0,0,.08)' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,' + teacherColor(t.t) + ',#FFB347)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: 14 }}>
                {t.n.split(' ').map(s => s[0]).join('').slice(0, 2).toUpperCase()}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800 }}>{t.n}</div>
                <div style={{ fontSize: 12, color: i === 1 ? 'rgba(255,255,255,.7)' : '#7a5a4f' }}>{t.d} · verified student</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 32 }}>
        <button onClick={() => setPage(p => (p - 1 + totalPages) % totalPages)} aria-label="Previous reviews" style={{ width: 44, height: 44, borderRadius: '50%', border: '2px solid #1B1B1F', background: '#fff', cursor: 'pointer', fontWeight: 900, fontSize: 18, fontFamily: 'inherit' }}>←</button>
        <div style={{ display: 'flex', gap: 8 }}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} onClick={() => setPage(i)} aria-label={'Page ' + (i + 1)} style={{
              width: i === page ? 32 : 10, height: 10, borderRadius: 6,
              background: i === page ? '#FF6B9D' : 'rgba(0,0,0,.2)',
              border: 0, cursor: 'pointer', transition: 'all .25s', padding: 0
            }} />
          ))}
        </div>
        <button onClick={() => setPage(p => (p + 1) % totalPages)} aria-label="Next reviews" style={{ width: 44, height: 44, borderRadius: '50%', border: '2px solid #1B1B1F', background: '#fff', cursor: 'pointer', fontWeight: 900, fontSize: 18, fontFamily: 'inherit' }}>→</button>
      </div>
      <div style={{ textAlign: 'center', marginTop: 14, fontSize: 13, color: '#7a5a4f' }}>
        <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#10B981', marginRight: 6, animation: 'pulse 1.6s ease-in-out infinite' }} />
        Auto-rotating · {page + 1} of {totalPages}
      </div>
    </div>
  );
}
window.TestimonialsRotator = TestimonialsRotator;

// ============ WHATSAPP DEMO ============
function WhatsAppDemo() {
  const SCRIPT = [
    { who: 'them', text: "Hey! How do you say \"how are you?\" in Hebrew?", delay: 1200 },
    { who: 'you', text: "מה נשמע? 😊", translit: "ma nishma?", delay: 1600 },
    { who: 'you', text: "literally — \"what's heard?\"", delay: 1300 },
    { who: 'them', text: "And how do I reply?", delay: 1100 },
    { who: 'you', text: "סבבה! 🙌", translit: "sababa!", delay: 1400 },
    { who: 'you', text: "= \"all good / cool\"", delay: 1300 },
    { who: 'them', text: "What about \"see you later\"?", delay: 1100 },
    { who: 'you', text: "להתראות 👋", translit: "lehitra'ot", delay: 1400 },
    { who: 'them', text: "🤯 wait, am I really doing this?", delay: 1300 },
    { who: 'you', text: "yalla, you're speaking Hebrew already 🇮🇱", delay: 1700 }
  ];

  const [shown, setShown] = React.useState([]);
  const [typing, setTyping] = React.useState(null);
  const idxRef = React.useRef(0);

  React.useEffect(() => {
    let alive = true;
    const tick = async () => {
      while (alive) {
        const i = idxRef.current;
        const msg = SCRIPT[i];
        setTyping(msg.who);
        await new Promise(r => setTimeout(r, msg.delay));
        if (!alive) return;
        setTyping(null);
        setShown(prev => {
          const next = [...prev, { ...msg, id: Date.now() + Math.random() }];
          return next.length > 5 ? next.slice(next.length - 5) : next;
        });
        await new Promise(r => setTimeout(r, 500));
        idxRef.current = (i + 1) % SCRIPT.length;
        if (idxRef.current === 0) {
          await new Promise(r => setTimeout(r, 1200));
          if (!alive) return;
          setShown([]);
        }
      }
    };
    tick();
    return () => { alive = false; };
  }, []);

  return (
    <div style={waStyles.frame}>
      <div style={waStyles.header}>
        <div style={waStyles.avatarWrap}>
          <div style={waStyles.avatarImg}>E</div>
          <div style={waStyles.online} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={waStyles.name}>Eilai · Hebrew Tutor</div>
          <div style={waStyles.status}>
            {typing === 'them' ? <><span className="hh-typing-dots" style={waStyles.typingDots}><span></span><span></span><span></span></span> typing…</> : 'online · responds in seconds'}
          </div>
        </div>
        <div style={waStyles.headerIcons}>
          <span>📞</span>
          <span>📹</span>
        </div>
      </div>

      <div style={waStyles.body}>
        <div style={waStyles.dateChip}>TODAY</div>
        {shown.map((m) => (
          <div key={m.id} style={{ ...waStyles.bubbleWrap, justifyContent: m.who === 'you' ? 'flex-end' : 'flex-start' }}>
            <div style={{
              ...waStyles.bubble,
              ...(m.who === 'you' ? waStyles.bubbleYou : waStyles.bubbleThem),
              animation: 'waPop .35s cubic-bezier(.34,1.56,.64,1) both'
            }}>
              <div style={{ fontSize: 15, lineHeight: 1.4, fontWeight: 500 }}>{m.text}</div>
              {m.translit && <div style={{ fontFamily: "'Caveat'", fontSize: 18, color: m.who === 'you' ? 'rgba(255,255,255,.85)' : '#E0457B', marginTop: 2, lineHeight: 1 }}>{m.translit}</div>}
              <div style={{ fontSize: 10, marginTop: 4, opacity: .7, textAlign: 'right' }}>
                {new Date().getHours().toString().padStart(2, '0')}:{new Date().getMinutes().toString().padStart(2, '0')}
                {m.who === 'you' && <span style={{ marginLeft: 4, color: '#53BDEB' }}>✓✓</span>}
              </div>
            </div>
          </div>
        ))}
        {typing && (
          <div style={{ ...waStyles.bubbleWrap, justifyContent: typing === 'you' ? 'flex-end' : 'flex-start' }}>
            <div style={{
              ...waStyles.bubble,
              ...(typing === 'you' ? waStyles.bubbleYou : waStyles.bubbleThem),
              padding: '10px 16px', animation: 'waPop .25s ease both'
            }}>
              <span className="hh-typing-dots" style={waStyles.typingDots}><span></span><span></span><span></span></span>
            </div>
          </div>
        )}
      </div>

      <div style={waStyles.inputBar}>
        <span style={{ fontSize: 22 }}>😊</span>
        <div style={waStyles.fakeInput}>Type a message…</div>
        <span style={{ fontSize: 22 }}>📎</span>
        <div style={waStyles.micBtn}>🎤</div>
      </div>
    </div>
  );
}

const waStyles = {
  frame: {
    position: 'relative', zIndex: 1,
    width: '100%', maxWidth: 440, marginLeft: 'auto',
    background: '#fff', borderRadius: 24, overflow: 'hidden',
    boxShadow: '0 30px 60px rgba(0,0,0,.18), 0 8px 0 rgba(217,119,6,.15)',
    border: '8px solid #1B1B1F',
    transform: 'rotate(-2deg)',
    fontFamily: "'Rubik', system-ui, sans-serif"
  },
  header: { display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: '#075E54', color: '#fff' },
  avatarWrap: { position: 'relative', flexShrink: 0 },
  avatarImg: { width: 42, height: 42, borderRadius: '50%', background: 'linear-gradient(135deg,#FF6B9D,#FFB347)', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: 18 },
  online: { position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderRadius: '50%', background: '#10B981', border: '2px solid #075E54' },
  name: { fontWeight: 700, fontSize: 15, lineHeight: 1.1 },
  status: { fontSize: 12, opacity: .85, marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 },
  headerIcons: { display: 'flex', gap: 16, fontSize: 18, opacity: .9 },
  body: {
    background: "#E5DDD5",
    backgroundImage: "radial-gradient(rgba(0,0,0,.06) 1px, transparent 1px)",
    backgroundSize: "12px 12px",
    padding: '16px 14px', minHeight: 360, maxHeight: 360, overflow: 'hidden',
    display: 'flex', flexDirection: 'column', gap: 6
  },
  dateChip: { alignSelf: 'center', background: 'rgba(255,255,255,.85)', padding: '4px 12px', borderRadius: 12, fontSize: 11, fontWeight: 700, color: '#5b3a30', marginBottom: 6, boxShadow: '0 1px 3px rgba(0,0,0,.08)' },
  bubbleWrap: { display: 'flex', width: '100%' },
  bubble: { padding: '8px 12px', borderRadius: 14, maxWidth: '80%', boxShadow: '0 1px 1px rgba(0,0,0,.08)', position: 'relative' },
  bubbleThem: { background: '#fff', color: '#1B1B1F', borderTopLeftRadius: 4 },
  bubbleYou: { background: '#DCF8C6', color: '#1B1B1F', borderTopRightRadius: 4 },
  inputBar: { display: 'flex', alignItems: 'center', gap: 10, padding: 10, background: '#F0F0F0' },
  fakeInput: { flex: 1, background: '#fff', borderRadius: 22, padding: '10px 16px', color: '#999', fontSize: 13 },
  micBtn: { width: 40, height: 40, borderRadius: '50%', background: '#075E54', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 16 },
  typingDots: { display: 'inline-flex', gap: 3, alignItems: 'center' }
};
// add className to typing dots so the keyframe animation applies
const _origTypingDots = waStyles.typingDots;

window.WhatsAppDemo = WhatsAppDemo;

window.SunsetHack = SunsetHack;