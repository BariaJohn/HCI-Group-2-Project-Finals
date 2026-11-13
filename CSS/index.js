    const careerData = [
      {
        id: 0,
        title: "AI Systems Engineer",
        category: "Tech",
        matchScore: 98,
        rating: 4.9,
        reviewCount: 342,
        salaryMin: 145000,
        salaryMax: 210000,
        salaryFormatted: "$145,000 - $210,000",
        growth: 34,
        growthText: "+34% 5-Yr Surge",
        degree: "B.S. Computer Science / AI Engineering Certification",
        tags: ["PyTorch", "Python", "LLMs", "Cloud MLOps"],
        description: "Architects and deploys scalable artificial intelligence algorithms, neural networks, and automated pipeline infrastructures into enterprise systems.",
        milestones: [
          { phase: "Phase 1: Foundation", title: "Master Python & Data Structure Fundamentals", done: true },
          { phase: "Phase 1: Foundation", title: "Complete Machine Learning Algorithms Certification", done: true },
          { phase: "Phase 2: Execution", title: "Train & Deploy custom LLM fine-tuning model on AWS/GCP", done: false },
          { phase: "Phase 2: Execution", title: "Build Vector Database API with Deep Learning pipeline", done: false },
          { phase: "Phase 3: Launch", title: "Publish GitHub Open Source Portfolio & Mock Tech Interviews", done: false }
        ]
      },
      {
        id: 1,
        title: "UX/UI Product Designer",
        category: "Design",
        matchScore: 95,
        rating: 4.8,
        reviewCount: 289,
        salaryMin: 110000,
        salaryMax: 165000,
        salaryFormatted: "$110,000 - $165,000",
        growth: 18,
        growthText: "+18% Annual Demand",
        degree: "B.A. Interaction Design / HCI Micro-Degree",
        tags: ["Figma", "User Research", "Design Systems", "Prototyping"],
        description: "Creates intuitive, human-centered digital interfaces and product user experiences backed by rigorous user research and interactive design systems.",
        milestones: [
          { phase: "Phase 1: Foundation", title: "Master Design Theory, Color Systems & Accessibility Standard", done: true },
          { phase: "Phase 1: Foundation", title: "Figma Advanced Component & Auto-Layout Certification", done: true },
          { phase: "Phase 2: Execution", title: "Conduct 5 User Interviews & Build End-to-End Mobile App Prototype", done: false },
          { phase: "Phase 2: Execution", title: "Publish Design System Documentation & Micro-Interactions", done: false },
          { phase: "Phase 3: Launch", title: "Launch Interactive Web Portfolio & Case Study Review", done: false }
        ]
      },
      {
        id: 2,
        title: "Data Strategist & Analytics Lead",
        category: "Tech",
        matchScore: 92,
        rating: 4.7,
        reviewCount: 215,
        salaryMin: 120000,
        salaryMax: 175000,
        salaryFormatted: "$120,000 - $175,000",
        growth: 25,
        growthText: "+25% 5-Yr Surge",
        degree: "B.S. Statistics, Business Analytics or Data Analytics",
        tags: ["SQL", "Tableau", "Python", "Predictive Modeling"],
        description: "Translates complex datasets into actionable revenue decisions, predictive forecasting models, and executive data visualizations.",
        milestones: [
          { phase: "Phase 1: Foundation", title: "Master Advanced SQL Queries & Relational DB Schema", done: true },
          { phase: "Phase 1: Foundation", title: "Tableau & PowerBI Dashboard Certification", done: false },
          { phase: "Phase 2: Execution", title: "Build Predictive Churn Analytics Model with Python", done: false },
          { phase: "Phase 2: Execution", title: "Perform A/B Testing Case Study for E-Commerce Platform", done: false },
          { phase: "Phase 3: Launch", title: "Present Executive Data Storytelling Presentation", done: false }
        ]
      },
      {
        id: 3,
        title: "FinTech Product Manager",
        category: "Business",
        matchScore: 89,
        rating: 4.9,
        reviewCount: 402,
        salaryMin: 135000,
        salaryMax: 190000,
        salaryFormatted: "$135,000 - $190,000",
        growth: 22,
        growthText: "+22% High Growth",
        degree: "B.S. Finance, Business Tech, or MBA",
        tags: ["Agile Roadmap", "Financial APIs", "Product Ops", "Metrics"],
        description: "Leads cross-functional engineering and design teams to build next-generation payment systems, digital banking platforms, and investment tech.",
        milestones: [
          { phase: "Phase 1: Foundation", title: "Agile Scrum Product Owner Certification", done: true },
          { phase: "Phase 1: Foundation", title: "Financial API Integration & Open Banking Fundamentals", done: true },
          { phase: "Phase 2: Execution", title: "Write PRD (Product Requirement Document) for Mobile Wallet", done: false },
          { phase: "Phase 2: Execution", title: "Launch Unit Economics & User Retention Analytics Sprint", done: false },
          { phase: "Phase 3: Launch", title: "Product Leadership Strategy Simulation", done: false }
        ]
      },
      {
        id: 4,
        title: "Sustainability Tech Consultant",
        category: "Sustainability",
        matchScore: 86,
        rating: 4.6,
        reviewCount: 178,
        salaryMin: 95000,
        salaryMax: 145000,
        salaryFormatted: "$95,000 - $145,000",
        growth: 30,
        growthText: "+30% Green Tech Surge",
        degree: "B.S. Environmental Science or Sustainable Business",
        tags: ["ESG Auditing", "Carbon Analytics", "Clean Energy", "Policy"],
        description: "Advises enterprise organizations on carbon footprint reduction, renewable energy software adoption, and ESG compliance frameworks.",
        milestones: [
          { phase: "Phase 1: Foundation", title: "ESG Standards (GRI & SASB) Auditor Certification", done: true },
          { phase: "Phase 1: Foundation", title: "Carbon Accounting & Lifecycle Assessment Math", done: false },
          { phase: "Phase 2: Execution", title: "Conduct Corporate Net-Zero Transition Audit Project", done: false },
          { phase: "Phase 2: Execution", title: "Model Renewable Energy Microgrid Financial ROI", done: false },
          { phase: "Phase 3: Launch", title: "Deliver Sustainability Strategy Pitch to Board", done: false }
        ]
      },
      {
        id: 5,
        title: "Cloud Cybersecurity Architect",
        category: "Tech",
        matchScore: 94,
        rating: 4.9,
        reviewCount: 310,
        salaryMin: 140000,
        salaryMax: 200000,
        salaryFormatted: "$140,000 - $200,000",
        growth: 32,
        growthText: "+32% 5-Yr Surge",
        degree: "B.S. Cyber Security / CISSP Certification",
        tags: ["Zero Trust", "AWS Security", "Penetration Testing", "Threat Modeling"],
        description: "Protects critical cloud ecosystems by engineering Zero-Trust network defenses, automated threat detection, and security governance.",
        milestones: [
          { phase: "Phase 1: Foundation", title: "AWS Certified Security Specialist", done: true },
          { phase: "Phase 1: Foundation", title: "Master Zero Trust Architecture & Encryption Standards", done: true },
          { phase: "Phase 2: Execution", title: "Perform Network Vulnerability & Pentesting Lab", done: false },
          { phase: "Phase 2: Execution", title: "Configure Incident Response Automation Script", done: false },
          { phase: "Phase 3: Launch", title: "CISSP Professional Exam Completion", done: false }
        ]
      }
    ];

    
    let currentCategoryFilter = 'all';
    let currentHeroIndex = 0;
    let selectedRoadmapRoleId = 0;
    let quizAnswers = {};
    let quizStep = 1;

   
    document.addEventListener('DOMContentLoaded', () => {
      
      document.getElementById('currentYear').innerText = new Date().getFullYear();

     
      const navBtn = document.getElementById('mobileNavToggle');
      if (navBtn) {
        navBtn.addEventListener('click', () => {
          const drawer = document.getElementById('mobileDrawer');
          drawer.classList.toggle('hidden');
        });
      }

    
      filterAndRenderCards();
      populateRoadmapSelector();
      renderRoadmapMilestones();
    });

    function closeMobileDrawer() {
      document.getElementById('mobileDrawer').classList.add('hidden');
    }

    function showToast(message, icon = 'fa-check-circle') {
      const container = document.getElementById('toastContainer');
      const toast = document.createElement('div');
      toast.className = 'bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 border border-slate-700 pointer-events-auto transition transform translate-y-2 opacity-0 text-xs font-semibold';
      toast.innerHTML = `<i class="fa-solid ${icon} text-emerald-400 text-base"></i><span>${message}</span>`;
      container.appendChild(toast);

      setTimeout(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
      }, 50);

      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    }

   
    function cycleHeroCard() {
      currentHeroIndex = (currentHeroIndex + 1) % careerData.length;
      const role = careerData[currentHeroIndex];

      document.getElementById('heroMatchTitle').innerText = role.title;
      document.getElementById('heroMatchPercent').innerText = `${role.matchScore}% Match`;
      document.getElementById('heroMatchSalary').innerText = role.salaryFormatted;
      document.getElementById('heroMatchGrowth').innerText = role.growthText;
      
      showToast(`Previewing: ${role.title}`, 'fa-arrows-rotate');
    }

    function handleHeroSearch(e) {
      if (e.key === 'Enter') {
        triggerSearchFromHero();
      }
    }

    function triggerSearchFromHero() {
      const val = document.getElementById('heroSearchInput').value.trim().toLowerCase();
      if (!val) {
        scrollToExplore();
        return;
      }

      
      const cardsGrid = document.getElementById('cardsGrid');
      const filtered = careerData.filter(c => 
        c.title.toLowerCase().includes(val) || 
        c.tags.some(t => t.toLowerCase().includes(val)) ||
        c.category.toLowerCase().includes(val)
      );

      renderCardsList(filtered);
      scrollToExplore();
      showToast(`Showing search results for "${val}"`, 'fa-magnifying-glass');
    }

    function filterByTag(tag) {
      document.getElementById('heroSearchInput').value = tag;
      triggerSearchFromHero();
    }

    function scrollToQuiz() {
      document.getElementById('quiz-section').scrollIntoView({ behavior: 'smooth' });
    }

    function scrollToExplore() {
      document.getElementById('explore-section').scrollIntoView({ behavior: 'smooth' });
    }

   
    function selectAnswer(step, answerKey) {
      quizAnswers[`step${step}`] = answerKey;

      if (step < 3) {
      
        document.getElementById(`quizQuestion${step}`).classList.add('hidden');
        quizStep = step + 1;
        document.getElementById(`quizQuestion${quizStep}`).classList.remove('hidden');

        
        document.getElementById('quizStepBadge').innerText = quizStep;
        document.getElementById('quizStepNum').innerText = quizStep;
        
        const titles = ["Work Style & Aptitude", "Ideal Environment", "Primary Career Goal"];
        document.getElementById('quizStepTitle').innerText = titles[quizStep - 1];
        
        const progressPercent = (quizStep / 3) * 100;
        document.getElementById('quizProgressBar').style.width = `${progressPercent}%`;

      } else {
      
        calculateQuizResult();
      }
    }

    function calculateQuizResult() {
     
      document.getElementById('quizQuestion3').classList.add('hidden');
      document.getElementById('quizResultScreen').classList.remove('hidden');

      document.getElementById('quizStepTitle').innerText = "Personalized Recommendation";
      document.getElementById('quizProgressBar').style.width = "100%";

      
      let matchedRole = careerData[0]; 
      if (quizAnswers.step1 === 'design') {
        matchedRole = careerData[1]; 
      } else if (quizAnswers.step1 === 'business') {
        matchedRole = careerData[3]; 
      } else if (quizAnswers.step1 === 'impact') {
        matchedRole = careerData[4]; 
      } else if (quizAnswers.step2 === 'corporate') {
        matchedRole = careerData[2]; 
      }

      document.getElementById('resultPersonaTitle').innerText = `Matched: ${matchedRole.title}`;
      document.getElementById('resultPersonaDesc').innerText = matchedRole.description;
      document.getElementById('resultTopRole').innerText = matchedRole.title;
      document.getElementById('resultSalary').innerText = matchedRole.salaryFormatted;
      document.getElementById('resultGrowth').innerText = matchedRole.growthText;

      showToast(`Quiz completed! Matched with ${matchedRole.title}`, 'fa-trophy');
    }

    function applyQuizResultToExplore() {
      const title = document.getElementById('resultTopRole').innerText;
      const matched = careerData.find(c => c.title === title);
      if (matched) {
        setCategoryFilter(matched.category);
        selectedRoadmapRoleId = matched.id;
        document.getElementById('roadmapRoleSelector').value = matched.id;
        renderRoadmapMilestones();
      }
      scrollToExplore();
    }

    function resetQuiz() {
      quizStep = 1;
      quizAnswers = {};
      document.getElementById('quizResultScreen').classList.add('hidden');
      document.getElementById('quizQuestion1').classList.remove('hidden');
      document.getElementById('quizQuestion2').classList.add('hidden');
      document.getElementById('quizQuestion3').classList.add('hidden');

      document.getElementById('quizStepBadge').innerText = '1';
      document.getElementById('quizStepNum').innerText = '1';
      document.getElementById('quizStepTitle').innerText = 'Work Style & Aptitude';
      document.getElementById('quizProgressBar').style.width = '33%';
    }

  
    function setCategoryFilter(cat) {
      currentCategoryFilter = cat;
     
      const tabs = document.querySelectorAll('.cat-tab');
      tabs.forEach(tab => {
        if (tab.getAttribute('data-cat') === cat) {
          tab.className = "cat-tab bg-brand-600 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-md transition whitespace-nowrap";
        } else {
          tab.className = "cat-tab bg-white hover:bg-brand-50 text-slate-700 font-bold text-xs px-5 py-2.5 rounded-full border border-slate-200 transition whitespace-nowrap";
        }
      });

      filterAndRenderCards();
    }

    function filterAndRenderCards() {
      let filtered = [...careerData];

      if (currentCategoryFilter !== 'all') {
        filtered = filtered.filter(c => c.category === currentCategoryFilter);
      }

      const sortVal = document.getElementById('sortSelect').value;
      if (sortVal === 'match') {
        filtered.sort((a, b) => b.matchScore - a.matchScore);
      } else if (sortVal === 'salary') {
        filtered.sort((a, b) => b.salaryMax - a.salaryMax);
      } else if (sortVal === 'growth') {
        filtered.sort((a, b) => b.growth - a.growth);
      }

      renderCardsList(filtered);
    }

    function renderCardsList(list) {
      const container = document.getElementById('cardsGrid');
      if (list.length === 0) {
        container.innerHTML = `
          <div class="col-span-full text-center py-12 bg-white rounded-3xl border border-slate-200">
            <i class="fa-solid fa-folder-open text-4xl text-slate-300 mb-3"></i>
            <h4 class="font-bold text-slate-700">No matching career paths found</h4>
            <p class="text-xs text-slate-400 mt-1">Try resetting your search query or category tab.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = list.map(role => `
        <div class="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm card-hover-effect flex flex-col justify-between relative group">
          
          <!-- Card Top Bar -->
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                ${role.category}
              </span>
              <div class="bg-brand-50 text-brand-700 font-extrabold text-xs px-2.5 py-1 rounded-full border border-brand-200 flex items-center space-x-1">
                <i class="fa-solid fa-circle-check text-brand-600"></i>
                <span>${role.matchScore}% Match</span>
              </div>
            </div>

            <!-- Role Title -->
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-brand-700 transition leading-snug">
              ${role.title}
            </h3>

            <!-- Star Ratings -->
            <div class="flex items-center space-x-1.5 text-amber-400 text-xs mt-1.5 font-semibold">
              <i class="fa-solid fa-star"></i>
              <span class="text-slate-800 font-bold">${role.rating}</span>
              <span class="text-slate-400">(${role.reviewCount} reviews)</span>
            </div>

            <!-- Description -->
            <p class="text-slate-500 text-xs line-clamp-2 mt-3 leading-relaxed">
              ${role.description}
            </p>

            <!-- Salary & Growth Badges -->
            <div class="grid grid-cols-2 gap-2 my-4 pt-3 border-t border-slate-100">
              <div class="bg-slate-50 p-2.5 rounded-xl">
                <span class="text-[10px] text-slate-400 font-semibold block">Avg Salary</span>
                <span class="text-xs font-bold text-slate-800">${role.salaryFormatted}</span>
              </div>
              <div class="bg-slate-50 p-2.5 rounded-xl">
                <span class="text-[10px] text-slate-400 font-semibold block">5-Yr Demand</span>
                <span class="text-xs font-bold text-brand-600">${role.growthText}</span>
              </div>
            </div>

            <!-- Skill Tags -->
            <div class="flex flex-wrap gap-1 mb-4">
              ${role.tags.map(t => `<span class="bg-slate-100 text-slate-600 text-[11px] font-semibold px-2 py-0.5 rounded-md">${t}</span>`).join('')}
            </div>
          </div>

          <!-- Card Actions -->
          <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button onclick="openCardDetails(${role.id})" class="text-xs font-bold text-slate-900 hover:text-brand-600 flex items-center space-x-1 transition">
              <span>View Full Roadmap</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
            
            <button onclick="selectTargetRoleFromCard(${role.id})" class="bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-extrabold px-3 py-1.5 rounded-xl transition border border-brand-200">
              + Track Path
            </button>
          </div>

        </div>
      `).join('');
    }

    
    function openCardDetails(id) {
      const role = careerData.find(c => c.id === id);
      if (!role) return;

      const headerContainer = document.getElementById('modalHeaderContent');
      const bodyContainer = document.getElementById('modalBodyContent');
      const selectBtn = document.getElementById('modalSelectRoadmapBtn');

      headerContainer.innerHTML = `
        <div class="flex items-center space-x-3 mb-2">
          <span class="bg-brand-100 text-brand-700 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            ${role.category}
          </span>
          <span class="text-emerald-600 bg-emerald-50 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-200">
            ${role.matchScore}% Compatibility
          </span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-slate-900">${role.title}</h2>
      `;

      bodyContainer.innerHTML = `
        <p class="text-slate-600 leading-relaxed">${role.description}</p>
        
        <div class="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div>
            <span class="text-xs text-slate-400 font-semibold block">Salary Spectrum</span>
            <span class="text-base font-extrabold text-slate-800">${role.salaryFormatted}</span>
          </div>
          <div>
            <span class="text-xs text-slate-400 font-semibold block">Market Growth Rate</span>
            <span class="text-base font-extrabold text-brand-600">${role.growthText}</span>
          </div>
        </div>

        <div>
          <h4 class="font-bold text-slate-900 mb-1 flex items-center space-x-2">
            <i class="fa-solid fa-graduation-cap text-brand-600"></i>
            <span>Recommended Education &amp; Micro-Degrees</span>
          </h4>
          <p class="text-xs bg-purple-50 text-purple-900 p-3 rounded-xl border border-purple-200 font-semibold">
            ${role.degree}
          </p>
        </div>

        <div>
          <h4 class="font-bold text-slate-900 mb-2 flex items-center space-x-2">
            <i class="fa-solid fa-list-check text-brand-600"></i>
            <span>Key Skill Roadmap Milestones</span>
          </h4>
          <ul class="space-y-2">
            ${role.milestones.map(m => `
              <li class="flex items-center text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <i class="fa-solid ${m.done ? 'fa-circle-check text-emerald-500' : 'fa-circle text-slate-300'} mr-2.5 text-sm"></i>
                <span class="font-medium">${m.title}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;

      selectBtn.onclick = () => {
        selectTargetRoleFromCard(role.id);
        closeCardDetails();
      };

      document.getElementById('detailModal').classList.remove('hidden');
      document.getElementById('detailModal').classList.add('flex');
    }

    function closeCardDetails() {
      document.getElementById('detailModal').classList.add('hidden');
      document.getElementById('detailModal').classList.remove('flex');
    }

    function selectTargetRoleFromCard(id) {
      selectedRoadmapRoleId = id;
      document.getElementById('roadmapRoleSelector').value = id;
      renderRoadmapMilestones();
      document.getElementById('roadmap-section').scrollIntoView({ behavior: 'smooth' });
      showToast(`Active roadmap updated!`, 'fa-route');
    }

   
    function populateRoadmapSelector() {
      const selector = document.getElementById('roadmapRoleSelector');
      selector.innerHTML = careerData.map(role => `
        <option value="${role.id}">${role.title} (${role.matchScore}% Match)</option>
      `).join('');
    }

    function changeRoadmapRole() {
      const selector = document.getElementById('roadmapRoleSelector');
      selectedRoadmapRoleId = parseInt(selector.value, 10);
      renderRoadmapMilestones();
    }

    function renderRoadmapMilestones() {
      const role = careerData.find(c => c.id === selectedRoadmapRoleId);
      if (!role) return;

      const container = document.getElementById('roadmapTasksContainer');
      container.innerHTML = role.milestones.map((m, idx) => `
        <div onclick="toggleMilestone(${idx})" class="p-4 rounded-2xl bg-white border ${m.done ? 'border-emerald-200 bg-emerald-50/30' : 'border-slate-200'} hover:border-brand-400 transition cursor-pointer flex items-start space-x-3 group shadow-sm">
          <div class="mt-0.5">
            <input 
              type="checkbox" 
              ${m.done ? 'checked' : ''} 
              class="w-5 h-5 rounded-md text-brand-600 focus:ring-brand-500 cursor-pointer accent-purple-600"
              onchange="toggleMilestone(${idx})"
            />
          </div>
          <div class="flex-1">
            <div class="text-[10px] font-extrabold uppercase tracking-wider ${m.done ? 'text-emerald-600' : 'text-slate-400'}">
              ${m.phase}
            </div>
            <div class="text-sm font-bold ${m.done ? 'text-slate-800 line-through decoration-slate-400' : 'text-slate-900'}">
              ${m.title}
            </div>
          </div>
        </div>
      `).join('');

      calculateReadinessScore(role);
    }

    function toggleMilestone(idx) {
      const role = careerData.find(c => c.id === selectedRoadmapRoleId);
      if (!role || !role.milestones[idx]) return;

      role.milestones[idx].done = !role.milestones[idx].done;
      renderRoadmapMilestones();

      if (role.milestones[idx].done) {
        showToast('Milestone completed! Readiness score increased.', 'fa-circle-check');
      }
    }

    function resetRoadmapProgress() {
      const role = careerData.find(c => c.id === selectedRoadmapRoleId);
      if (!role) return;

      role.milestones.forEach(m => m.done = false);
      renderRoadmapMilestones();
      showToast('Progress reset for selected path.', 'fa-arrow-rotate-left');
    }

    function calculateReadinessScore(role) {
      const total = role.milestones.length;
      const completed = role.milestones.filter(m => m.done).length;
      const percentage = Math.round((completed / total) * 100);

      document.getElementById('readinessPercentage').innerText = `${percentage}%`;
      document.getElementById('readinessBar').style.width = `${percentage}%`;

      const badge = document.getElementById('readinessBadge');
      const msg = document.getElementById('readinessMessage');

      if (percentage === 100) {
        badge.className = "bg-emerald-500 text-white font-extrabold text-xs px-3 py-1 rounded-full animate-bounce";
        badge.innerText = "Job Ready!";
        msg.innerText = "Congratulations! You have completed 100% of the recommended milestones for this career path.";
      } else if (percentage >= 60) {
        badge.className = "bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 text-xs font-bold px-3 py-1 rounded-full";
        badge.innerText = "Advanced";
        msg.innerText = "Great progress! Complete remaining Phase 3 launch items to start portfolio applications.";
      } else {
        badge.className = "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold px-3 py-1 rounded-full";
        badge.innerText = "On Track";
        msg.innerText = "Focus on completing Phase 1 core milestone items to unlock project recommendations.";
      }
    }