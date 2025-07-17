// Utility to reattach observer and apply fade-in animation
function applyAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeSlideIn 0.8s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('#mid, #projects, #about').forEach(el => {
    el.style.opacity = 0;
    observer.observe(el);
  });
}

function home() {
  console.log("home clicked");
  document.body.innerHTML = `
    <div id="nav">
        <div>Personal Portfolio</div>
        <button onclick="home()">Home</button>
        <button onclick="proj()">Projects</button>
        <button onclick="experience()">Experience</button>
        <button onclick="skill()">Skill</button>
        <button onclick="contact()">Contact</button>
    </div>
    <div id="mid" class="section-header-bg">
      <div style="text-align: center; padding-top: 40px;">
        <h1>Angad Gill</h1>
        <h2>PERSONAL PORTFOLIO</h2>
      </div>
    </div>
    <div id="his">
      <div id="about">
        <h1>About me</h1>
        <h3>This is a responsive calculator built using HTML, CSS, and JavaScript. It supports basic operations such as addition, subtraction, multiplication, division, and percentage. The layout adapts to different screen sizes...</h3>
      </div>
    </div>
    <script src="js.js"></script>
  `;
  applyAnimations();
}

function proj() {
  console.log("proj clicked");
  document.body.innerHTML = `
    <div id="nav">
      <div>Personal Portfolio</div>
      <button onclick="home()">Home</button>
      <button onclick="proj()">Projects</button>
      <button onclick="experience()">Experience</button>
      <button onclick="skill()">Skill</button>
      <button onclick="contact()">Contact</button>
    </div>
    <div id="mid" class="section-header-bg">
      <h1 id="a1">Projects</h1>
    </div>
    <div id="projects">
      <ul>
        <li>
          <div class="p_title"><h1>Job Website</h1></div>
          <div class="p_body"><p>A platform where job seekers can browse and apply...</p></div>
          <a href="https://github.com/AngadGill98k/job">View Project</a>
        </li>
        <li>
          <div class="p_title"><h1>E-Commerce Website</h1></div>
          <div class="p_body"><p>Online store with cart, product filtering, and payment integration...</p></div>
          <a href="https://github.com/AngadGill98k/e-com">View Project</a>
        </li>
        <li>
          <div class="p_title"><h1>Quiz App</h1></div>
          <div class="p_body"><p>A quiz game with timed questions, categories, and scoring...</p></div>
          <a href="https://github.com/AngadGill98k/Quiz">View Project</a>
        </li>
        <li>
          <div class="p_title"><h1>Task Manager</h1></div>
          <div class="p_body"><p>Drag-and-drop task manager with board and card features...</p></div>
          <a href="https://github.com/AngadGill98k/Trello">View Project</a>
        </li>
        <li>
          <div class="p_title"><h1>Music & Video Streaming</h1></div>
          <div class="p_body"><p>Upload, store, and stream audio/video files...</p></div>
          <a href="https://github.com/AngadGill98k/music">View Project</a>
        </li>
      </ul>
    </div>
    <script src="js.js"></script>
  `;
  applyAnimations();
}

function experience() {
  console.log("experience clicked");
  document.body.innerHTML = `
    <div id="nav">
        <div>Personal Portfolio</div>
        <button onclick="home()">Home</button>
        <button onclick="proj()">Projects</button>
        <button onclick="experience()">Experience</button>
        <button onclick="skill()">Skill</button>
        <button onclick="contact()">Contact</button>
    </div>
    <div id="mid" class="section-header-bg">
      <h1 id="a1">Experience</h1>
    </div>
    <div id="projects">
      <ul>
        <li>
          <div class="p_title"><h1>Internship Experience</h1></div>
          <div class="p_body">
            <p><strong>CodSoft:</strong> Web Dev Intern – HTML, CSS, JS</p>
            <p><strong>Oasis Infobyte:</strong> Full Stack MERN work</p>
            <p><strong>SkillUp:</strong> Frontend and backend API tasks</p>
          </div>
         
        </li>
        <li>
          <div class="p_title"><h1>Certifications</h1></div>
          <div class="p_body">
            <p><strong>DevTown:</strong></p>
            <ul>
              <li>Web Development</li>
              <li>Python Programming</li>
              <li>Core Java</li>
            </ul>
          </div>
          
        </li>
      </ul>
    </div>
    <script src="js.js"></script>
  `;
  applyAnimations();
}

function skill() {
  console.log("skill clicked");
  document.body.innerHTML = `
    <div id="nav">
      <div>Personal Portfolio</div>
      <button onclick="home()">Home</button>
      <button onclick="proj()">Projects</button>
      <button onclick="experience()">Experience</button>
      <button onclick="skill()">Skill</button>
      <button onclick="contact()">Contact</button>
    </div>
    <div id="mid" class="section-header-bg">
      <h1 id="a1">Skills</h1>
    </div>
    <div id="projects">
      <ul>
        <li>
          <div class="p_title"><h1>Technical Skills</h1></div>
          <div class="p_body">HTML, CSS, JS, React, Node.js, Express, MongoDB, SQL, C++, Java</div>
          <a href="https://github.com/AngadGill98k">See Projects</a>
        </li>
        <li>
          <div class="p_title"><h1>Soft Skills</h1></div>
          <div class="p_body">Teamwork, Communication, Problem Solving, Time Management</div>
          <a href="#">LinkedIn Profile</a>
        </li>
      </ul>
    </div>
    <script src="js.js"></script>
  `;
  applyAnimations();
}

function contact() {
  console.log("contact clicked");
  document.body.innerHTML = `
    <div id="nav">
      <div>Personal Portfolio</div>
      <button onclick="home()">Home</button>
      <button onclick="proj()">Projects</button>
      <button onclick="experience()">Experience</button>
      <button onclick="skill()">Skill</button>
      <button onclick="contact()">Contact</button>
    </div>
    <div id="mid" class="section-header-bg">
      <h1 id="a1">Contact</h1>
    </div>
    <div id="projects">
      <ul>
        <li>
          <div class="p_title"><h1>Contact Info</h1></div>
          <div class="p_body">
            <p><strong>Phone:</strong> +91-9650845188</p>
            <p><strong>Email:</strong> <a href="mailto:angadgill088@gmail.com">you@example.com</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank">yourprofile</a></p>
          </div>
          
        </li>
      </ul>
    </div>
    <script src="js.js"></script>
  `;
  applyAnimations();
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
