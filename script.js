/* =========================================================
   RUBAHA MUNIR PORTFOLIO
   Main JavaScript
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen =
      mainNav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

  });


  /* Close mobile menu after clicking a link */

  mainNav.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach((element) => {

    revealObserver.observe(element);

  });

} else {

  revealElements.forEach((element) => {

    element.classList.add("visible");

  });

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
  document.querySelectorAll("main section[id]");

const navLinks =
  document.querySelectorAll(".main-nav a");


if ("IntersectionObserver" in window) {

  const sectionObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }


          const currentId =
            entry.target.getAttribute("id");


          navLinks.forEach((link) => {

            const linkTarget =
              link.getAttribute("href");


            link.classList.toggle(
              "active",
              linkTarget === `#${currentId}`
            );

          });

        });

      },
      {
        rootMargin:
          "-25% 0px -65% 0px"
      }
    );


  sections.forEach((section) => {

    sectionObserver.observe(section);

  });

}


/* =========================================================
   PROJECT DATA
   ========================================================= */

const projectData = {

  esrd: {

    label: "01 / CLINICAL RESEARCH",

    title:
      "Factors Responsible for Kidney Failure among ESRD Patients",

    description:
      "A questionnaire-based research project investigating various factors responsible for kidney failure among patients with end-stage renal disease in Sargodha, Pakistan.",

    details: [

      {
        title: "Research focus",
        text:
          "Investigation of demographic, lifestyle, clinical, medication-related, dietary, and environmental factors associated with ESRD."
      },

      {
        title: "Sample",
        text:
          "257 ESRD patients were included in the final collected sample."
      },

      {
        title: "Approach",
        text:
          "Team-designed questionnaire with English and Urdu versions, followed by validity assessment and pilot work."
      },

      {
        title: "Analysis",
        text:
          "Statistical analysis performed using IBM SPSS, including descriptive analysis, chi-square testing, Cramer's V, and non-parametric methods."
      }

    ]

  },


  nlc: {

    label:
      "02 / PHARMACEUTICAL TECHNOLOGY",

    title:
      "Thiol-Modified Mucoadhesive Nanostructured Lipid Carriers",

    description:
      "Pharmaceutical technology research focused on thiol-modified mucoadhesive nanostructured lipid carriers as a drug-delivery approach.",

    details: [

      {
        title: "Research area",
        text:
          "Nanostructured lipid carrier-based drug delivery and pharmaceutical formulation."
      },

      {
        title: "Core concept",
        text:
          "Development of a thiol-modified mucoadhesive lipid-based delivery system."
      },

      {
        title: "Characterization",
        text:
          "Relevant characterization concepts include particle size, polydispersity index, and zeta potential."
      },

      {
        title: "Academic focus",
        text:
          "Understanding formulation design, drug delivery behavior, and physicochemical characterization."
      }

    ]

  },


  alzheimer: {

    label:
      "03 / REVIEW RESEARCH",

    title:
      "Engineered Exosomal Non-Coding RNAs in Alzheimer's Disease",

    description:
      "A review-focused research project examining engineered exosomal non-coding RNAs for Alzheimer's disease diagnosis and therapeutic cargo delivery.",

    details: [

      {
        title: "Disease focus",
        text:
          "Alzheimer's disease diagnosis, biomarkers, and therapeutic approaches."
      },

      {
        title: "Liquid biopsy",
        text:
          "Exploration of blood, cerebrospinal fluid, saliva, tears, and urine as potential liquid-biopsy sources."
      },

      {
        title: "Exosomal cargo",
        text:
          "Focus on exosomes and non-coding RNAs as potential diagnostic biomarkers and therapeutic cargo."
      },

      {
        title: "Key considerations",
        text:
          "Isolation heterogeneity, cargo quantification, biodistribution, immunogenicity, and batch reproducibility are important translational considerations."
      }

    ]

  }

};


/* =========================================================
   PROJECT MODAL
   ========================================================= */

const projectModal =
  document.getElementById("projectModal");

const modalOverlay =
  document.getElementById("modalOverlay");

const modalClose =
  document.getElementById("modalClose");

const modalLabel =
  document.getElementById("modalLabel");

const modalTitle =
  document.getElementById("modalTitle");

const modalDescription =
  document.getElementById("modalDescription");

const modalDetails =
  document.getElementById("modalDetails");


function openProjectModal(projectKey) {

  const project =
    projectData[projectKey];

  if (!project) {
    return;
  }


  modalLabel.textContent =
    project.label;


  modalTitle.textContent =
    project.title;


  modalDescription.textContent =
    project.description;


  modalDetails.innerHTML = "";


  project.details.forEach((detail) => {

    const detailElement =
      document.createElement("div");

    detailElement.className =
      "modal-detail";


    detailElement.innerHTML = `
      <strong>${detail.title}</strong>
      <span>${detail.text}</span>
    `;


    modalDetails.appendChild(
      detailElement
    );

  });


  projectModal.classList.add("active");

  projectModal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "modal-open"
  );


  modalClose.focus();

}


function closeProjectModal() {

  projectModal.classList.remove(
    "active"
  );

  projectModal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.classList.remove(
    "modal-open"
  );

}


/* Open project buttons */

document
  .querySelectorAll(".project-card")
  .forEach((card) => {

    const button =
      card.querySelector(".project-open");

    const projectKey =
      card.dataset.project;


    if (button) {

      button.addEventListener(
        "click",
        () => {

          openProjectModal(
            projectKey
          );

        }
      );

    }

  });


/* Close button */

if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeProjectModal
  );

}


/* Overlay */

if (modalOverlay) {

  modalOverlay.addEventListener(
    "click",
    closeProjectModal
  );

}


/* Escape key */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      projectModal.classList.contains("active")
    ) {

      closeProjectModal();

    }

  }
);


/* =========================================================
   SMOOTH INTERNAL LINKS
   ========================================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        const targetId =
          link.getAttribute("href");


        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }


        const target =
          document.querySelector(
            targetId
          );


        if (!target) {
          return;
        }


        event.preventDefault();


        const headerHeight =
          document.querySelector(
            ".site-header"
          )?.offsetHeight || 0;


        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerHeight;


        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });

      }
    );

  });
