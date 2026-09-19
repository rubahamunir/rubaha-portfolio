/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* Close mobile navigation when a link is clicked */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navigationLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        `#${entry.target.id}`
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },

    {
        rootMargin: "-35% 0px -55% 0px"
    }

);

sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   PROJECT MODAL
========================================================= */

const modal =
    document.getElementById("projectModal");

const modalBody =
    document.getElementById("modalBody");

const modalClose =
    document.getElementById("modalClose");

const modalOverlay =
    document.getElementById("modalOverlay");


const projectData = {

    esrd: {

        label: "CLINICAL RESEARCH",

        title:
            "Factors Responsible for Kidney Failure among ESRD Patients",

        description:
            "Academic research investigating various factors associated with kidney failure among end-stage renal disease patients in Sargodha, Pakistan.",

        overview:
            "The study involved development and use of a structured questionnaire to investigate potential contributing factors among ESRD patients. The research process included questionnaire development, English and Urdu translation, face and content validity, pilot work, data collection, and statistical analysis.",

        methods:
            "Data analysis was conducted using IBM SPSS. The analytical work included descriptive statistics and association testing, including chi-square analysis and effect-size interpretation using Cramer's V, along with appropriate non-parametric approaches where applicable.",

        tags: [
            "ESRD",
            "Clinical Research",
            "Questionnaire",
            "SPSS",
            "Biostatistics"
        ]

    },


    nlc: {

        label: "PHARMACEUTICAL TECHNOLOGY",

        title:
            "Thiol-Modified Mucoadhesive Nanostructured Lipid Carriers",

        description:
            "A pharmaceutical technology project exploring thiol-modified mucoadhesive nanostructured lipid carriers as an approach to improve drug delivery and bioavailability.",

        overview:
            "The project focused on formulation and characterization of thiol-modified mucoadhesive nanostructured lipid carriers for a BCS Class IV drug. The work connected formulation design with concepts of lipid-based drug delivery, mucoadhesion, and enhanced bioavailability.",

        methods:
            "The formulation work involved preparation of NLC systems and characterization concepts including particle size, polydispersity index, and zeta potential. The project also involved interpretation of formulation-related pharmaceutical properties.",

        tags: [
            "NLC",
            "Drug Delivery",
            "Mucoadhesion",
            "BCS Class IV",
            "Particle Size",
            "PDI",
            "Zeta Potential"
        ]

    },


    alzheimer: {

        label: "REVIEW RESEARCH",

        title:
            "Engineered Exosomal Non-Coding RNAs in Alzheimer's Disease",

        description:
            "A review-focused research project exploring engineered exosomal non-coding RNAs for Alzheimer's disease diagnosis and therapeutic cargo delivery.",

        overview:
            "The review connects Alzheimer's disease biomarkers with emerging liquid biopsy approaches and engineered extracellular vesicles. It considers blood, cerebrospinal fluid and other potential biological sources, exosomal cargo, non-coding RNAs, and emerging biosensing strategies.",

        methods:
            "The research examined approaches including exosome isolation and characterization, biomarker detection, biosensor technologies, therapeutic cargo engineering, and challenges such as isolation heterogeneity, cargo quantification, biodistribution, immunogenicity, and batch reproducibility.",

        tags: [
            "Alzheimer's Disease",
            "Exosomes",
            "ncRNA",
            "Liquid Biopsy",
            "Biosensors",
            "Drug Delivery"
        ]

    }

};


function openProject(projectKey) {

    const project =
        projectData[projectKey];

    if (!project) return;


    modalBody.innerHTML = `

        <span class="section-label">
            ${project.label}
        </span>

        <h2>
            ${project.title}
        </h2>

        <p>
            ${project.description}
        </p>

        <div class="modal-tags">

            ${project.tags
                .map(tag => `<span>${tag}</span>`)
                .join("")
            }

        </div>

        <h3>
            Research Overview
        </h3>

        <p>
            ${project.overview}
        </p>

        <h3>
            Approach
        </h3>

        <p>
            ${project.methods}
        </p>

    `;


    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

}


document
    .querySelectorAll("[data-project]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openProject(
                    button.dataset.project
                );

            }
        );

    });


function closeModal() {

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeModal
);

modalOverlay.addEventListener(
    "click",
    closeModal
);


/* Close modal with Escape */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   FOOTER YEAR
========================================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();
