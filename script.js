const IMG = "images/projects/";
const DRONE = [
  { src: IMG + "drone-top.jpg", thumb: IMG + "drone-top-thumb.jpg", cap: "Top view" },
  { src: IMG + "drone-angle.jpg", cap: "Another angle" }
];
const IRR = [
  { src: IMG + "irrigation-esp32.png", thumb: IMG + "irrigation-esp32-thumb.png", cap: "ESP32-S3 pin assignment" },
  { src: IMG + "irrigation-sensors.png", cap: "Temperature/humidity, soil moisture and sunlight sensors" },
  { src: IMG + "irrigation-motor-driver.png", cap: "Water-level sensor and L298N pump driver" }
];
const SWITCH = [
  { src: IMG + "light-switch-mounted.jpg", thumb: IMG + "light-switch-mounted-thumb.jpg", cap: "Mounted over the wall switch" },
  { src: IMG + "light-switch-breadboard.jpg", cap: "ESP32 and USB-C 5 V power on the breadboard" },
  { src: IMG + "light-switch-phone.jpg", cap: "Control page on a phone at lightswitch.local" },
  { src: IMG + "light-switch-wiring.png", cap: "Wiring diagram" }
];
const MIPS = [{ src: IMG + "mips-decode-stage.png", thumb: IMG + "mips-decode-stage-thumb.png", cap: "Decode-stage block diagram (from the course lab handout)" }];
const ARM = [{ src: IMG + "armadillo-wiring.jpg", thumb: IMG + "armadillo-wiring-thumb.jpg", cap: "Initial wiring plan. Mechanical CAD is still in progress." }];
const SPIDER = { src: IMG + "spider-robot.jpg", thumb: IMG + "spider-robot-thumb.jpg" };
const RCCAR = { src: IMG + "rc-car.jpg", thumb: IMG + "rc-car-thumb.jpg" };
const RCCAR_MEDIA = [
  { video: IMG + "rc-car-course.mp4", poster: IMG + "rc-car-course-poster.jpg", cap: "Driving the chalk race course" },
  { video: IMG + "rc-car-demo.mp4", poster: IMG + "rc-car-demo-poster.jpg", cap: "Driving it from a phone over Bluetooth" },
  { src: IMG + "rc-car.jpg", cap: "The finished car" }
];
const BADGE = { Personal: "b-personal", Team: "b-team", Hackathon: "b-hack", Course: "b-course" };
const projects = [
  { id: "drone", gallery: DRONE, img: DRONE[0].thumb, dark: true, layout: "pair", cat: "embedded", title: "Quadcopter Build and Autonomous Flight", badges: [["Course","Course · Drones"],["Team","Team"]], date: "Fall 2026",
    stack: "ArduPilot · Mission Planner · Matek F405-WING · ESP32-C3 · ExpressLRS · GPS",
    short: "Built a quadcopter from parts and flew a fully autonomous waypoint mission: automatic takeoff, waypoint and auto-land, planned in Mission Planner.",
    bullets: ["Built a quadcopter from parts with my team: flight controller, ExpressLRS radio link, brushless motors and ESCs, GPS and Wi-Fi telemetry, running ArduPilot.",
      "Flew a fully autonomous waypoint mission planned in Mission Planner: automatic takeoff, a waypoint, then auto-land.",
      "Connected the flight controller to the ground station over Wi-Fi through an ESP32-C3, and verified attitude telemetry by tilting the board and watching the on-screen horizon.",
      "Next, in Drones 2 (Winter 2027): onboard YOLO object detection on an Orange Pi companion computer, vision-triggered landing, and an AI pilot that flies through tool calls."],
    credits: [["Course: EECS 195 Drones, taught by Prof. Peter Burke, UC Irvine. Parts and build design provided by the course.", ""], ["Follow-on: Drones 2: AI, Vision & Autonomy (EECS 199 independent study) with Prof. Peter Burke, Winter 2027", ""], ["Flight software: ArduPilot (open source)", "https://ardupilot.org/"]],
    skills: ["Drone assembly and wiring", "ArduPilot and Mission Planner setup", "Autonomous waypoint missions", "ESP32 Wi-Fi telemetry bridge", "Checking live sensor data against real motion"] },
  { id: "irrigation", cat: "embedded", title: "Smart Irrigation System", badges: [["Hackathon","StarkHacks · Purdue"],["Team","Team"]], date: "Apr 2026",
    stack: "ESP32 · Python · FastAPI · WebSockets", repo: "https://github.com/MrYangGeorge/Groot", devpost: "https://devpost.com/software/leaf-it-to-us-yvn8ls", gallery: IRR, img: IRR[0].thumb, fit: "contain",
    short: "ESP32 reads soil-moisture, temperature/humidity, water-level and light sensors and decides when to run a water pump.",
    bullets: ["Built an ESP32 system that reads soil-moisture, temperature/humidity, water-level, and light sensors to control a water pump.",
      "Wrote and debugged firmware that streams JSON sensor data over Wi-Fi to a Python server.",
      "Designed a FastAPI backend that applies sensor thresholds to decide when to water, with low-water safety checks and an automatic/manual mode.",
      "Defined REST endpoints shared by two frontends, including an AI chat interface that explains plant status."],
    skills: ["Multi-sensor integration on an ESP32", "Streaming JSON over Wi-Fi and WebSockets", "Threshold control with safety checks", "Driving a pump through an L298N", "KiCad schematic capture"] },
  { id: "armadillo", gallery: ARM, img: ARM[0].thumb, fit: "contain", cat: "embedded", title: "ArmAdillo Color-Sorting Robot Arm", badges: [["Team","Zims Robotics Club"],["Team","Electrical lead"]], date: "Fall 2026 – Present",
    stack: "ESP32 · PCA9685 · AS5600 · TCA9548A · I²C · PWM",
    short: "Electrical team lead for a six-degree-of-freedom competition arm. Planned the wiring for seven servos and three joint encoders on one I²C bus.",
    bullets: ["Serve as electrical team lead and oversee sensor integration for a six-degree-of-freedom color-sorting competition arm.",
      "Planned the initial wiring: an ESP32 drives seven servos (six joints and the gripper) through a PCA9685 PWM board over I²C.",
      "Added a TCA9548A I²C multiplexer so three AS5600 magnetic encoders, which all share one fixed address, can report joint angles on the same bus.",
      "Split the power: a fused 6 V, 20 A supply for the servos and a separate 5 V, 2 A supply for the ESP32. Mechanical CAD is still in progress."],
    skills: ["Leading an electrical team", "I²C bus design with a multiplexer", "Servo power budgeting and fusing", "Choosing sensors for joint feedback"] },
  { id: "switch", repo: "https://github.com/MrYangGeorge/wifi-light-switch", gallery: SWITCH, img: SWITCH[0].thumb, pos: "center 55%", layout: "switch", cat: "embedded", title: "Wi-Fi Light Switch", badges: [["Personal","Personal"]], date: "Nov 2026",
    stack: "ESP32 · PWM · servo · USB-C 5 V",
    short: "A browser page flips a real wall light switch through a servo driven by an ESP32.",
    bullets: ["Built a web page served by the ESP32 that turns a wall light switch on and off over Wi-Fi.",
      "Calibrated the servo's on, off and rest positions for the switch's travel. The arm returns to rest after each press so the switch still works by hand.",
      "Powered the servo and ESP32 from a USB-C 5 V breakout instead of the board's 3.3 V pin, with capacitors on the 5 V rail.",
      "Kept the firmware non-blocking so the web server stays responsive while the servo moves."],
    skills: ["PWM servo calibration", "Web server on an ESP32", "Non-blocking firmware with millis()", "Separate 5 V supply for actuators"] },
  { id: "focus", cat: "embedded", title: "IoT Focus-Monitoring System", badges: [["Hackathon","IrvineHacks"],["Team","Team"]], date: "Feb 2026",
    stack: "Arduino UNO Q · C++ · Python · I²C · Supabase · React", repo: "https://github.com/MrYangGeorge/LOOKIE_DOOKIE", devpost: "https://devpost.com/software/lookie-dookie",
    short: "A study-focus tool on an Arduino UNO Q: a USB camera runs face detection while sensors read room light and temperature, and a React dashboard tracks each session.",
    bullets: ["Ran Arduino's face-detection model on a USB camera connected to an Arduino UNO Q and streamed each detection's confidence to the dashboard as a live focus score.",
      "Wrote the microcontroller sketch: reads an analog light sensor and a Modulino temperature sensor over I²C, shares the readings with the Linux side through the Arduino Bridge, and lights an LED when the room gets too dark.",
      "Used Claude Code to integrate the React frontend and Python backend, including the WebSocket connection between the hardware and the dashboard.",
      "The dashboard logs study sessions to Supabase, and pauses the timer and sounds an alarm when you leave the study tab mid-session.",
      "Blink-rate and eyes-closed values were placeholders in the hackathon demo, so the drowsiness alarm wasn't driven by real eye data yet. A fatigue model based on pose keypoints was started but not connected."],
    skills: ["Microcontroller-to-Linux communication on the UNO Q", "Reading I²C and analog sensors", "WebSocket integration between hardware and a web app", "AI-assisted development with Claude Code"] },
  { id: "spider", img: SPIDER.thumb, full: SPIDER.src, repo: "https://github.com/MrYangGeorge/spider-robot", cat: "embedded", title: "Spider Robot", badges: [["Team","Team"],["Team","Open-source build"]], date: "Mar 2026",
    stack: "Arduino · C++ · Servos · Ultrasonic",
    short: "Our build of an open-source four-legged robot with 12 servos and an ultrasonic sensor. It steps back and turns when something is in its way.",
    bullets: ["3D-printed the parts, assembled and wired 12 servos and an HC-SR04 sensor, and calibrated the legs.",
      "Moved the ultrasonic sensor off the serial pins so it no longer conflicted with debug output.",
      "Worked with teammates to diagnose wiring and mechanical faults during assembly."],
    credits: [["Original design and code: Regis Hsu, SpiderRobot", "https://github.com/regishsu/SpiderRobot"], ["Build guide: ROBOT Lk", ""]],
    skills: ["3D printing and mechanical assembly", "Wiring and calibrating 12 servos", "Reading and adapting someone else's firmware", "Finding a pin conflict between a sensor and serial output"] },
  { id: "rccar", img: RCCAR.thumb, gallery: RCCAR_MEDIA, layout: "trio-media", hasVideo: true, repo: "https://github.com/MrYangGeorge/bluetooth-rc-car", pos: "center 62%", cat: "embedded", title: "Bluetooth RC Car with Obstacle Stop", badges: [["Team","Team · Award"],["Team","UCI Summer Bridge"]], date: "Aug 2025",
    stack: "Arduino Uno · C++ · Adafruit Motor Shield · HC-SR04 · Bluetooth",
    short: "A four-wheel mecanum car driven from a phone over Bluetooth that stops by itself when something is within 30 cm. Built for UCI's Summer Bridge Tech Challenge.",
    bullets: ["Wrote the Arduino C++ firmware: Bluetooth serial commands for forward, back, turns, spins and speed up/down across four DC motors.",
      "Added an HC-SR04 ultrasonic safety stop that halts the motors and lights an LED when an obstacle is closer than 30 cm.",
      "Built the car with the team on a mecanum-wheel chassis, with 3D-printed and laser-cut parts as the challenge required. The team earned an award at the final race."],
    credits: [["Challenge and kit: UCI OAI Summer Bridge Tech Challenge, led by Prof. David Copp (MAE)", ""], ["Chassis: SZDOIT 60 mm mecanum wheel car kit", ""]],
    skills: ["DC motor control with a motor shield", "Bluetooth serial commands", "Ultrasonic distance sensing", "Team design with 3D-printed and laser-cut parts"] },
  { id: "mips", gallery: MIPS, img: MIPS[0].thumb, fit: "contain", cat: "digital", title: "Pipelined MIPS Processor", badges: [["Course","Course · Computer Architecture"]], date: "Fall 2026",
    stack: "Verilog · Vivado XSim",
    short: "Instruction-fetch and ALU control logic for a pipelined CPU, passing forwarding, stall, branch and jump tests.",
    bullets: ["Implemented instruction-fetch and ALU control logic.", "Passed simulation tests for forwarding, data stalls, branches, and jumps."],
    skills: ["Verilog RTL design", "Pipeline hazards: forwarding, stalls, branches", "Testbench-driven verification in Vivado"] },
  { id: "adder", cat: "digital", title: "4-Bit CMOS Adder/Subtractor", badges: [["Course","Course · VLSI Design"]], date: "Fall 2026",
    stack: "Cadence Virtuoso · Spectre · DRC/LVS",
    short: "A four-bit datapath built from transistor-level cells. Passed DRC and LVS and six arithmetic test cases.",
    bullets: ["Built a four-bit datapath from transistor-level cells.", "Passed design-rule and layout-versus-schematic checks and verified six arithmetic test cases.",
      "Compared schematic and extracted-layout waveforms to examine switching during input transitions."],
    skills: ["Transistor-level CMOS design", "Layout with DRC and LVS", "Schematic vs. extracted-layout simulation"] },
  { id: "ringosc", cat: "digital", title: "CMOS Inverter and Ring Oscillator", badges: [["Course","Course · VLSI Design"]], date: "Fall 2026",
    stack: "Cadence Virtuoso · Spectre",
    short: "Inverter delay of 63.64 ps. Layout extraction dropped the oscillator from 1.987 GHz to 1.769 GHz.",
    bullets: ["Measured a simulated inverter propagation delay of 63.64 ps.", "Layout extraction reduced the simulated oscillator frequency from 1.987 GHz to 1.769 GHz."],
    skills: ["Propagation delay measurement", "How layout parasitics slow a circuit"] },
  { id: "flightdb", art: true, cat: "software", title: "Flight Reservation Database App", badges: [["Course","Course · Databases"]], date: "2026",
    stack: "Python · PyMySQL · MySQL",
    short: "Menu-driven app over a 9-table flights database with search, insert, update and delete.",
    bullets: ["Built a menu-driven application over a 9-table relational flights database supporting search, insert, update, and delete.",
      "Wrote parameterized SQL with multi-table JOINs, GROUP BY/HAVING, and transaction commits."],
    skills: ["SQL joins and GROUP BY/HAVING", "Parameterized queries and transactions from Python"] },
  { id: "cookie", art: true, cat: "software", title: "Cookie Calories Calculator", badges: [["Course","Course · C++ Data Structures"],["Team","Team"]], date: "Spring 2024",
    stack: "C++ · linked list", repo: "https://github.com/MrYangGeorge/cookie-calories-calculator",
    short: "Console app that stores recipes in a custom linked list and works out how many servings fit a calorie budget.",
    bullets: ["Stored recipes in a custom singly linked list with copy constructor, assignment operator and destructor.",
      "Added a servings calculator that divides a calorie budget by calories per serving."],
    skills: ["Linked lists and the Big Three in C++", "Menu-driven console programs"] },
  { id: "greenscreen", art: true, cat: "software", title: "GreenScreen Image Compositor", badges: [["Course","Course · C++ Programming"]], date: "Nov 2024",
    stack: "C++ · pointers · RGBA image buffers",
    short: "Removes a green-screen background from a photo and places the subject onto a new background, working directly on raw pixel data with pointers.",
    bullets: ["Wrote a green-screen filter that walks an RGBA pixel buffer with pointers and makes a pixel transparent when its green value is more than twice its red and blue.",
      "Wrote a compositor that fills the transparent pixels from a background image of the same size.",
      "Passed all six of the instructor's automated tests on the provided images."],
    credits: [["Assignment, test harness and images: CS 150 at Orange Coast College, Stephen Gilbert", ""]],
    skills: ["Pointer arithmetic over raw image buffers", "RGBA pixel formats", "Writing code against an automated test suite"] },
];
const GROUPS = [
  { key: "builds", show: 4, match: p => p.cat === "embedded" },
  { key: "course", show: 3, match: p => p.cat !== "embedded" }
];
const expanded = { builds: false, course: false };

function esc(s) { return s.replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c])); }
function badgeHTML(p) { return p.badges.map(([k,label]) => `<span class="badge ${BADGE[k]}">${esc(label)}</span>`).join(""); }

function thumb(p, label) {
  if (p.img) return `<div class="footprint has-img${p.fit ? " fit" : ""}${p.dark ? " dark" : ""}">${p.hasVideo && label === "PHOTO" ? `<span class="vid-tag">▶ VIDEO</span>` : ""}<img src="${p.img}" alt="${esc(p.title)}" loading="lazy"${p.pos ? ` style="object-position:${p.pos}"` : ""}></div>`;
  if (p.art || (!p.img && !p.soon)) return `<div class="footprint art"><svg class="trace-art" viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g class="base" fill="none" stroke="#FFD200" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M-5 30H60l15 15h50l10-10h70"/><path d="M-5 60h40l15 15h70l15-15h70"/><path d="M-5 95h75l15-15h40l15 15h65"/><path d="M-5 120h30l10-10h50"/><path d="M120 120h85"/><path d="M150 15v20l10 10h45"/></g><g class="sig"><path d="M-5 30H60l15 15h50l10-10h70" style="animation-delay:-0.00s"/><path d="M-5 60h40l15 15h70l15-15h70" style="animation-delay:-0.27s"/><path d="M-5 95h75l15-15h40l15 15h65" style="animation-delay:-0.54s"/><path d="M-5 120h30l10-10h50" style="animation-delay:-0.81s"/><path d="M120 120h85" style="animation-delay:-1.08s"/><path d="M150 15v20l10 10h45" style="animation-delay:-1.35s"/></g><g class="pads" fill="#FFD200"><circle cx="135" cy="35" r="4"/><circle cx="35" cy="60" r="4"/><circle cx="85" cy="110" r="4"/><circle cx="120" cy="120" r="4"/><circle cx="150" cy="15" r="4"/><rect x="104" y="76" width="12" height="8" rx="1"/></g><g fill="#163a70"><circle cx="135" cy="35" r="1.6"/><circle cx="35" cy="60" r="1.6"/><circle cx="85" cy="110" r="1.6"/><circle cx="120" cy="120" r="1.6"/><circle cx="150" cy="15" r="1.6"/></g></svg></div>`;
  if (p.soon) return `<div class="footprint soon"><span>PHOTO<br>COMING<br>SOON</span></div>`;
  return `<div class="footprint">${label}</div>`;
}
function galleryHTML(p) {
  const shot = g => `<figure class="shot"><div class="footprint has-img fit${p.dark || g.video ? " dark" : ""}">${g.video ? `<video src="${g.video}" poster="${g.poster}" muted autoplay loop playsinline controls aria-label="${esc(g.cap)}"></video>` : `<img src="${g.src}" alt="${esc(g.cap)}" loading="lazy">`}</div><figcaption>${esc(g.cap)}</figcaption></figure>`;
  if (p.layout === "switch") return `<div class="gallery trio">${p.gallery.slice(0, 3).map(shot).join("")}</div><div class="gallery stack" style="margin-top:-12px">${shot(p.gallery[3])}</div>`;
  if (p.layout === "trio-media") return `<div class="gallery trio">${p.gallery.map(shot).join("")}</div>`;
  if (p.layout === "pair-tall") return `<div class="gallery pair tall">${p.gallery.map(shot).join("")}</div>`;
  if (p.layout === "pair") return `<div class="gallery pair">${p.gallery.map(shot).join("")}</div>`;
  return `<div class="gallery stack">${shot(p.gallery[0])}<div class="side">${p.gallery.slice(1).map(shot).join("")}</div></div>`;
}
function rowHTML(p) {
  return `
    <button type="button" class="prow" data-id="${p.id}" aria-label="Open ${esc(p.title)}">
      ${thumb(p, "PHOTO")}
      <div class="prow-body">
        <div class="prow-top"><h3>${esc(p.title)}</h3><span class="date">${esc(p.date)}</span></div>
        <p>${esc(p.short)}</p>
        <div class="prow-foot"><div class="badges">${badgeHTML(p)}</div><span class="stack">${esc(p.stack)}</span><span class="arrow">→</span></div>
      </div>
    </button>`;
}
function renderGrid() {
  for (const g of GROUPS) {
    const list = projects.filter(g.match);
    const shown = expanded[g.key] ? list : list.slice(0, g.show);
    document.getElementById("grid-" + g.key).innerHTML = shown.map(rowHTML).join("");
    const rest = list.length - g.show;
    document.getElementById("more-" + g.key).innerHTML = rest > 0
      ? `<button type="button" id="more-btn-${g.key}" data-k="${g.key}">${expanded[g.key] ? "Show fewer" : `See ${rest} more`}</button>` : "";
  }
}
function renderDetail(p) {
  document.getElementById("detail").innerHTML = `
    <button type="button" class="back" id="back">← All projects</button>
    <div class="badges">${badgeHTML(p)}</div>
    <h1>${esc(p.title)}</h1>
    <p class="meta">${esc(p.date)} · ${esc(p.stack)}</p>
    <p class="summary">${esc(p.short)}</p>
    ${p.gallery ? galleryHTML(p) : `<div class="gallery single${p.art ? " art-strip" : ""}">${thumb(p.full ? { ...p, img: p.full, pos: null } : p, "")}</div>`}
    <h2>What I built</h2>
    <ul>${p.bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul>
    ${p.skills ? `<h2>Skills I developed</h2><div class="chips skill-chips">${p.skills.map(k => `<span>${esc(k)}</span>`).join("")}</div>` : ""}
    ${p.credits ? `<h2>Credits</h2><ul class="credits">${p.credits.map(([t, u]) => `<li>${u ? `<a href="${u}" target="_blank" rel="noopener">${esc(t)}</a>` : esc(t)}</li>`).join("")}</ul>` : ""}
    <div class="links">${p.repo ? `<a class="btn solid" href="${p.repo}" target="_blank" rel="noopener">View code on GitHub</a>` : ""}${p.devpost ? `<a class="btn solid" href="${p.devpost}" target="_blank" rel="noopener">See it on Devpost</a>` : ""}</div>`;
  document.getElementById("back").addEventListener("click", () => { location.hash = "projects"; });
}
function route() {
  const h = location.hash.slice(1);
  const p = projects.find(x => "p-" + x.id === h);
  document.getElementById("home-view").hidden = !!p;
  document.getElementById("detail-view").hidden = !p;
  if (p) { renderDetail(p); window.scrollTo(0, 0); }
  else if (h) { const el = document.getElementById(h); if (el) el.scrollIntoView(); }
  document.querySelectorAll("nav.main a:not(.resume)").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + (p ? "projects" : (h || "about"))));
  if (!p) drawBoard();
}
document.getElementById("projects").addEventListener("click", e => {
  const c = e.target.closest(".prow"); if (c) { location.hash = "p-" + c.dataset.id; return; }
  const b = e.target.closest(".see-more button"); if (!b) return;
  const k = b.dataset.k; expanded[k] = !expanded[k]; renderGrid();
  if (!expanded[k]) document.getElementById("grid-" + k).parentElement.scrollIntoView();
});

/* PCB traces: routed copper on a 20px grid with 45-degree bends, vias and pads; small signal pulses travel along them. */
const cv = document.getElementById("traces");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let traces = [], pulses = [], raf = 0, W = 0, H = 0;
function rng(seed) { return () => (seed = (seed * 16807) % 2147483647) / 2147483647; }
function buildTraces() {
  const r = rng(20260); const G = 20; traces = [];
  const rows = Math.floor(H / G);
  for (let i = 1; i < rows; i += 1) {
    if (r() < 0.35) continue;
    let x = W + 10, y = i * G; const pts = [[x, y]];
    let len = W * (0.25 + r() * 0.5);
    while (len > 0) {
      const run = G * (2 + Math.floor(r() * 8)); x -= run; len -= run; pts.push([x, y]);
      if (r() < 0.5 && len > 0) { const d = (r() < 0.5 ? -1 : 1) * G; x -= G; y += d; pts.push([x, y]); }
    }
    traces.push({ pts, end: r() < 0.6 ? "via" : "pad" });
  }
}
function draw() {
  const ctx = cv.getContext("2d");
  ctx.clearRect(0, 0, W, H);
  ctx.lineWidth = 2; ctx.lineJoin = "round"; ctx.lineCap = "round";
  ctx.strokeStyle = "rgba(255,210,0,0.34)";
  for (const tr of traces) {
    ctx.beginPath(); tr.pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
    const [ex, ey] = tr.pts[tr.pts.length - 1];
    if (tr.end === "via") { ctx.beginPath(); ctx.arc(ex, ey, 4.5, 0, Math.PI * 2); ctx.fillStyle = "rgba(255,210,0,0.6)"; ctx.fill(); ctx.beginPath(); ctx.arc(ex, ey, 1.8, 0, Math.PI * 2); ctx.fillStyle = "#163a70"; ctx.fill(); }
    else { ctx.fillStyle = "rgba(255,210,0,0.55)"; ctx.fillRect(ex - 6, ey - 4, 12, 8); }
  }
  if (!reduce) {
    for (const p of pulses) {
      const pts = traces[p.i].pts; const seg = Math.min(pts.length - 2, Math.floor(p.s));
      const f = p.s - seg; const [x1, y1] = pts[seg], [x2, y2] = pts[seg + 1];
      const x = x1 + (x2 - x1) * f, y = y1 + (y2 - y1) * f;
      const g = ctx.createRadialGradient(x, y, 0, x, y, 9); g.addColorStop(0, "rgba(255,236,150,0.95)"); g.addColorStop(1, "rgba(255,236,150,0)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 9, 0, Math.PI * 2); ctx.fill();
      p.s += p.v; if (p.s >= pts.length - 1) { p.s = 0; p.i = Math.floor(Math.random() * traces.length); }
    }
    raf = requestAnimationFrame(draw);
  }
}
function drawBoard() {
  cancelAnimationFrame(raf);
  const rect = cv.getBoundingClientRect(); if (!rect.width) return;
  const dpr = window.devicePixelRatio || 1; W = rect.width; H = rect.height;
  cv.width = W * dpr; cv.height = H * dpr; cv.getContext("2d").setTransform(dpr, 0, 0, dpr, 0, 0);
  buildTraces();
  pulses = traces.length ? Array.from({ length: 6 }, (_, k) => ({ i: (k * 5) % traces.length, s: Math.random() * 3, v: 0.02 + Math.random() * 0.025 })) : [];
  draw();
}
let rt; window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(drawBoard, 150); });
window.addEventListener("hashchange", route);
renderGrid(); route();

/* Highlight the nav item for the section in view while scrolling the home page. */
(() => {
  const links = [...document.querySelectorAll("nav.main a:not(.resume)")];
  const ids = ["about", "projects", "contact"];
  const onScroll = () => {
    if (document.getElementById("home-view").hidden) return;
    const y = window.scrollY + 120;
    let current = "about";
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= y) current = id;
    }
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = "contact";
    links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
})();
