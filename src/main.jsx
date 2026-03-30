import { useState } from "react";
import { createRoot } from "react-dom/client";

const COURSES = [
  {
    id: "thomism",
    label: "Phenomenology & Thomism",
    color: "#92400e",
    weeks: "14 weeks",
    description: "Can phenomenological method disclose real being? This course traces the realist tradition from Aristotle and Aquinas through Brentano and Husserl to the Munich/Göttingen realists — asking whether rigorous description of experience leads to, rather than away from, a robust metaphysical realism.",
    prereq: true,
    phases: [
      {
        phase: "Phase 1", title: "Medieval Foundations", weeks: "Weeks 1–3", color: "#92400e",
        description: "Build the metaphysical vocabulary that realist phenomenologists will later rediscover: act and potency, essence and existence, intentional knowledge, and the person as rational substance.",
        units: [
          {
            title: "Aristotle: Being, Substance, and Form",
            readings: [
              { text: "Aristotle — Metaphysics, Book IV (Ch. 1–3) & Book VII (Ch. 1–4)", type: "primary" },
              { text: "Aristotle — De Anima, Book II (Ch. 1–3: form and the soul)", type: "primary" },
              { text: "Étienne Gilson — The Spirit of Medieval Philosophy (Ch. 4–5)", type: "supplemental" },
            ],
            exercises: [
              "What does Aristotle mean by substance (ousia)? How does the form/matter distinction apply to living things?",
              "Journal: How does Aristotle's hylomorphism challenge both pure materialism and Platonic dualism?",
            ],
            keyIdeas: ["Substance / ousia", "Form and matter", "Act and potency", "The soul as form of the body"],
          },
          {
            title: "Boethius & Aquinas: Person, Being, and Existence",
            readings: [
              { text: "Boethius — Contra Eutychen (definition of person) & Consolation of Philosophy, Book III", type: "primary" },
              { text: "Thomas Aquinas — On Being and Essence (De Ente et Essentia), complete", type: "primary" },
              { text: "Thomas Aquinas — Summa Theologiae I, Q. 29 (On Persons) & Q. 75–76 (On the Soul)", type: "primary" },
            ],
            exercises: [
              "Unpack Boethius's definition of person word by word. What philosophical work does each term do?",
              "Why does Aquinas insist that existence (esse) is an act, not a property? What follows from this for how we understand real things?",
            ],
            keyIdeas: ["Persona as individual rational substance", "Essence / existence distinction", "Esse as act of being", "Hylomorphic person"],
          },
          {
            title: "Poinsot: Scholastic Intentionality and Signs",
            readings: [
              { text: "John Poinsot (John of St. Thomas) — Tractatus de Signis, Book I (Q. 1–2)", type: "primary" },
              { text: "John Deely — Four Ages of Understanding (Ch. 16–17: Poinsot's semiotic realism)", type: "supplemental" },
            ],
            exercises: [
              "Poinsot distinguishes formal from instrumental signs. How might this anticipate Husserl's account of intentionality?",
              "Can knowledge be genuinely objective — reaching the real — while being mediated by mental acts? Write a page defending or rejecting this.",
            ],
            keyIdeas: ["Formal vs. instrumental signs", "Intentional species", "Realist epistemology", "Adaequatio intellectus et rei"],
          },
        ],
      },
      {
        phase: "Phase 2", title: "The Phenomenological Question", weeks: "Weeks 4–5", color: "#6366f1",
        description: "Brentano revives scholastic intentionality; Husserl radicalizes it. But Husserl's epoché creates a crisis for realists: does phenomenology disclose real being, or only the structures of consciousness?",
        units: [
          {
            title: "Brentano: Intentionality Revived",
            readings: [
              { text: "Franz Brentano — Psychology from an Empirical Standpoint (Book II, Ch. 1)", type: "primary" },
              { text: "SEP entry: Franz Brentano (sections 2–4)", type: "supplemental" },
            ],
            exercises: [
              "Brentano draws on Aquinas's intentional inexistence. Compare his use of the concept to the Scholastic original — what is preserved, what changed?",
              "Why does making intentionality the mark of the mental matter so much for the history of philosophy?",
            ],
            keyIdeas: ["Intentional inexistence", "Mental vs. physical phenomena", "Descriptive psychology"],
          },
          {
            title: "Husserl: The Bracketing Problem",
            readings: [
              { text: "Edmund Husserl — Ideas I (§§1–32)", type: "primary" },
              { text: "Edmund Husserl — Cartesian Meditations (Meditations 1–2)", type: "primary" },
              { text: "Dan Zahavi — Husserl's Phenomenology (Ch. 2–3)", type: "supplemental" },
            ],
            exercises: [
              "What exactly does the epoché bracket? Does Husserl deny the external world exists, or suspend the question? Write a careful answer.",
              "Identify the tension: phenomenology promises rigorous description of experience, but realists want experience to disclose real being. Is Husserl's method compatible with realism?",
            ],
            keyIdeas: ["Epoché / reduction", "Noesis / noema", "Transcendental idealism vs. realism", "The realist crisis"],
          },
        ],
      },
      {
        phase: "Phase 3", title: "Realist Phenomenology", weeks: "Weeks 6–10", color: "#0891b2",
        description: "The Munich and Göttingen realists refuse Husserl's idealist turn. Each develops a distinct strategy for showing that phenomenological description opens onto real being.",
        units: [
          {
            title: "Roman Ingarden: Ontology Against Idealism",
            readings: [
              { text: "Roman Ingarden — Controversy Over the Existence of the World (Vol. I, Ch. 1–2)", type: "primary" },
              { text: "Roman Ingarden — The Literary Work of Art (Ch. 1–2)", type: "primary" },
              { text: "SEP entry: Roman Ingarden", type: "supplemental" },
            ],
            exercises: [
              "How does Ingarden's distinction between purely intentional and real objects constitute an argument against Husserl's idealism — on Husserl's own methodological terms?",
              "Apply Ingarden's layered ontology to a work of art you know well. What layers can you identify?",
            ],
            keyIdeas: ["Purely intentional vs. real objects", "Layered ontology of the artwork", "Existential ontology", "Critique of idealism from within"],
          },
          {
            title: "Merleau-Ponty: The Flesh and the Lived Body",
            readings: [
              { text: "Maurice Merleau-Ponty — Phenomenology of Perception (Preface + Part I, Ch. 1–3)", type: "primary" },
              { text: "Maurice Merleau-Ponty — The Visible and the Invisible (Ch. 4: 'The Intertwining — The Chiasm')", type: "primary" },
              { text: "Shaun Gallagher & Dan Zahavi — The Phenomenological Mind (Ch. 6: body schema and body image)", type: "supplemental" },
            ],
            exercises: [
              "Close your eyes and touch a textured surface. Write about the experience from the perspective of your body — not your mind reporting on your body. How does Merleau-Ponty's account of motor intentionality illuminate what you describe?",
              "Merleau-Ponty's late concept of 'flesh' (chair) is not the body as object or the mind as subject, but the stuff of which both are made. Is this a coherent ontological claim — or does it dissolve into obscurity? Make the strongest case for and against.",
            ],
            keyIdeas: ["Lived body vs. objective body", "Motor intentionality", "Body schema", "Flesh (chair) as ontological", "Perception as participation"],
          },
          {
            title: "Hedwig Conrad-Martius: Phenomenology as Ontology",
            readings: [
              { text: "Hedwig Conrad-Martius — 'Realism in Modern German Philosophy' (in Spiegelberg, The Phenomenological Movement, appendix)", type: "primary" },
              { text: "Hedwig Conrad-Martius — Metaphysical Conversations (selections)", type: "primary" },
              { text: "SEP entry: Hedwig Conrad-Martius", type: "supplemental" },
            ],
            exercises: [
              "Conrad-Martius argues that rigorous phenomenology leads to ontology, not away from it. Make the strongest case you can for this claim.",
              "Compare Conrad-Martius with Husserl: what does she preserve from his method, and what does she reject?",
            ],
            keyIdeas: ["Ontological phenomenology", "Real essences", "Nature as self-unfolding being"],
          },
          {
            title: "Edith Stein: Synthesizing Husserl and Aquinas",
            readings: [
              { text: "Edith Stein — On the Problem of Empathy, complete", type: "primary" },
              { text: "Edith Stein — Finite and Eternal Being (Ch. 1–3)", type: "primary" },
              { text: "Sarah Borden Sharkey — Thine Own Self (Ch. 2)", type: "supplemental" },
            ],
            exercises: [
              "In Finite and Eternal Being, Stein explicitly synthesizes Husserl and Aquinas. What does she take from each, and where does she depart from both?",
              "Comparison — Stein and Merleau-Ponty on the body: Stein distinguishes the living body (Leib) from the physical body (Körper) within a broadly Thomistic framework, grounding bodily experience in a personal soul. Merleau-Ponty makes the lived body primary without any appeal to soul or substantial form. Write 1–2 pages: Where do their descriptions of bodily experience converge? Where does the metaphysical divergence become visible — and which account do you find more adequate to the phenomena?",
              "Describe a moment of genuine empathy. Analyze its structure using Stein's account — how is it different from inference or projection?",
            ],
            keyIdeas: ["Empathy as sui generis act", "Finite being / esse", "Personal core (Seelenkern)", "Phenomenology and scholasticism united"],
          },
          {
            title: "Jacques Maritain: Thomism Meets Modernity",
            readings: [
              { text: "Jacques Maritain — Existence and the Existent (Ch. 1–3)", type: "primary" },
              { text: "Jacques Maritain — The Degrees of Knowledge (Preface + Ch. 1)", type: "primary" },
              { text: "Ralph McInerny — The Very Rich Hours of Jacques Maritain (Ch. 5)", type: "supplemental" },
            ],
            exercises: [
              "Maritain argues that modern philosophy lost the existential act of being and became trapped in essences. Do you find this diagnosis convincing? How does it connect to Phase 1?",
              "How does Maritain's 'critical realism' differ from both naive realism and Kantian idealism? Is his middle path coherent?",
            ],
            keyIdeas: ["Existential act of being", "Critical realism", "Degrees of abstraction", "Subjectivity known obliquely"],
          },
        ],
      },
      {
        phase: "Phase 4", title: "Synthesis", weeks: "Weeks 11–14", color: "#059669",
        description: "Draw the threads together. Can a single unified account reconcile Thomistic metaphysics with phenomenological method?",
        units: [
          {
            title: "Paul Ricoeur: Hermeneutics and the Detour Through Meaning",
            readings: [
              { text: "Paul Ricoeur — Oneself as Another (Studies 1–2: the question of selfhood)", type: "primary" },
              { text: "Paul Ricoeur — 'Phenomenology and Hermeneutics' (essay, in Hermeneutics and the Human Sciences)", type: "primary" },
              { text: "Dan Zahavi — Subjectivity and Selfhood (Ch. 6: Ricoeur on narrative identity)", type: "supplemental" },
            ],
            exercises: [
              "Ricoeur argues we can only know ourselves through the 'detour' of signs, texts, and narratives. Does this undermine realism, or is it compatible with it?",
              "How does Ricoeur's hermeneutic phenomenology relate to the Thomistic account of the intellect knowing being through abstraction? Write a comparative page.",
            ],
            keyIdeas: ["Hermeneutic phenomenology", "Narrative identity", "Idem vs. ipse selfhood", "Detour through meaning"],
          },
          {
            title: "Capstone: Is a Phenomenological Thomism Possible?",
            readings: [
              { text: "Return to Edith Stein — Finite and Eternal Being (Ch. 7–8: person and being)", type: "primary" },
              { text: "John Knasas — Being and Some Twentieth-Century Thomists (Ch. 5–6)", type: "supplemental" },
            ],
            exercises: [
              "Write a 3-page essay: What would a fully unified phenomenological Thomism look like? What must it preserve from each tradition, and what tensions remain irreducible?",
              "Final reflection: Has studying this lineage changed how you understand knowledge, reality, or your own experience of the world?",
            ],
            keyIdeas: ["Your own synthesis", "Method and metaphysics", "What phenomenology adds to Thomism and vice versa"],
          },
        ],
      },
    ],
  },
  {
    id: "personalism",
    label: "Personalism",
    color: "#059669",
    weeks: "13 weeks",
    description: "What is a person? This course builds a systematic philosophy of personhood — drawing on Scholastic metaphysics, realist phenomenology, and the personalist movement — and keeps Heidegger in view as the thinker who most sharply defines the alternative.",
    prereq: true,
    phases: [
      {
        phase: "Phase 1", title: "Scholastic Roots of Personhood", weeks: "Weeks 1–2", color: "#92400e",
        description: "The personalist tradition inherits its core metaphysical vocabulary from Boethius and Aquinas. These units establish the foundation before the phenomenological transformation.",
        units: [
          {
            title: "Boethius & Aquinas: The Person as Rational Substance",
            readings: [
              { text: "Boethius — Contra Eutychen (definition of person)", type: "primary" },
              { text: "Thomas Aquinas — Summa Theologiae I, Q. 29 & Q. 75–76", type: "primary" },
              { text: "John Crosby — The Selfhood of the Human Person (Ch. 1: the Boethian inheritance)", type: "supplemental" },
            ],
            exercises: [
              "Unpack the Boethian definition word by word. What does 'individual substance of a rational nature' capture about persons — and what does it miss?",
              "How does Aquinas's hylomorphism shape his account of the person differently from Cartesian dualism?",
            ],
            keyIdeas: ["Persona as individual rational substance", "Hylomorphism", "Dignity from rational nature", "Subsistence"],
          },
        ],
      },
      {
        phase: "Phase 2", title: "Phenomenological Personalism", weeks: "Weeks 3–7", color: "#0891b2",
        description: "Scheler, von Hildebrand, and Wojtyła each use phenomenological description to enrich the Scholastic account of the person — insisting that the person must be understood from the inside, through acts, values, and freedom.",
        units: [
          {
            title: "Max Scheler: Person, Value, and Emotional Intuition",
            readings: [
              { text: "Max Scheler — Formalism in Ethics (Part II, Ch. 1–2: person and acts)", type: "primary" },
              { text: "Max Scheler — The Nature of Sympathy (Part III, Ch. 1)", type: "primary" },
              { text: "Eugene Kelly — Material Ethics of Value (Ch. 3)", type: "supplemental" },
            ],
            exercises: [
              "For Scheler the person is never an object — only a subject performing acts. How does this differ from Aquinas's substance-based account? Which do you find more compelling?",
              "Do a phenomenological description of a moment when something struck you as genuinely valuable — not just preferred.",
            ],
            keyIdeas: ["Person as act-center", "Ordo amoris", "Material value ethics", "Emotional a priori"],
          },
          {
            title: "Dietrich von Hildebrand: Value-Response and the Heart",
            readings: [
              { text: "Dietrich von Hildebrand — The Nature of Love (Ch. 1–3)", type: "primary" },
              { text: "Dietrich von Hildebrand — Ethics (Ch. 2–3: value, importance, and the will)", type: "primary" },
              { text: "John Henry Crosby — Dietrich von Hildebrand: The Man and His Work (Ch. 4)", type: "supplemental" },
            ],
            exercises: [
              "Describe an experience where something demanded a response from you beyond mere liking — a genuine value-response. Analyze its structure.",
              "Compare von Hildebrand's value-response theory with Scheler's emotional a priori. Where do they differ most sharply?",
            ],
            keyIdeas: ["Value-response", "Affective intentionality", "The heart as spiritual center", "Sanctity and transformed personhood"],
          },
          {
            title: "Karol Wojtyła: The Acting Person",
            readings: [
              { text: "Karol Wojtyła — The Acting Person (Ch. 1–3)", type: "primary" },
              { text: "Karol Wojtyła — 'Subjectivity and the Irreducible in the Human Being' (essay)", type: "primary" },
              { text: "Kenneth Schmitz — At the Center of the Human Drama (Ch. 3–4)", type: "supplemental" },
            ],
            exercises: [
              "Wojtyła holds that the person is most fully revealed in self-determination. Analyze a moment of genuine choosing — not merely reacting — using his framework.",
              "Where does Wojtyła think Scheler falls short? Do you agree with his critique?",
            ],
            keyIdeas: ["Person revealed in act", "Self-possession / self-governance", "Suppositum (Thomistic substrate)", "Consciousness as co-constitutive"],
          },
        ],
      },
      {
        phase: "Phase 3", title: "Communitarian Personalism", weeks: "Weeks 8–10", color: "#059669",
        description: "The person is never isolated. Mounier and Maritain develop the social and political dimensions of personalism — asking what kind of community befits the dignity of persons.",
        units: [
          {
            title: "Emmanuel Mounier: Engagement and Community",
            readings: [
              { text: "Emmanuel Mounier — Personalism (complete)", type: "primary" },
              { text: "Emmanuel Mounier — Be Not Afraid (Part I: person and history)", type: "supplemental" },
            ],
            exercises: [
              "Mounier distinguishes the 'individual' (isolated unit) from the 'person' (relational, engaged). Does this distinction hold up phenomenologically?",
              "How does Mounier's political vision follow from his personalist metaphysics? Is the connection tight or loose?",
            ],
            keyIdeas: ["Person vs. individual", "Engagement / commitment", "Community of persons", "Against both capitalism and collectivism"],
          },
          {
            title: "Jacques Maritain: Integral Humanism",
            readings: [
              { text: "Jacques Maritain — The Person and the Common Good (complete)", type: "primary" },
              { text: "Jacques Maritain — Integral Humanism (Ch. 1–3)", type: "primary" },
            ],
            exercises: [
              "Maritain distinguishes the person (spiritual, ordered to the common good) from the individual (material, part of the social whole). How does this Thomistic distinction compare to Mounier's?",
              "What does Maritain mean by 'integral humanism'? Is his vision still relevant today?",
            ],
            keyIdeas: ["Integral humanism", "Person / individual distinction (Thomistic)", "Temporal and spiritual orders", "Human dignity in society"],
          },
          {
            title: "Romano Guardini: The Person and the World of the Church",
            readings: [
              { text: "Romano Guardini — The World and the Person (Ch. 1–4)", type: "primary" },
              { text: "Romano Guardini — Letters from Lake Como (complete, short)", type: "primary" },
              { text: "Robert Krieg — Romano Guardini: A Precursor of Vatican II (Ch. 3)", type: "supplemental" },
            ],
            exercises: [
              "Guardini argues modern technology threatens personhood by dissolving the concrete, the particular, and the relational. Do a phenomenological description of an experience where technology felt dehumanizing.",
              "How does Guardini's personalism relate to Wojtyła's? What does his theological context add?",
            ],
            keyIdeas: ["Person as irreducibly concrete", "World / person polarity", "Technology and depersonalization", "Liturgy as personal encounter"],
          },
        ],
      },
      {
        phase: "Phase 4", title: "Heidegger as Counterpoint", weeks: "Weeks 11–12", color: "#7c3aed",
        description: "Heidegger uses phenomenology to arrive at a radically different destination — Dasein without a substantial self, authenticity without personhood. Studying him sharpens your grasp of what is genuinely at stake in the personalist alternative.",
        units: [
          {
            title: "Heidegger: Dasein, Thrownness, and Authenticity",
            readings: [
              { text: "Martin Heidegger — Being and Time (Division I, §§1–18; Division II, §§54–60)", type: "primary" },
              { text: "Hubert Dreyfus — Being-in-the-World (Ch. 2–4)", type: "supplemental" },
            ],
            exercises: [
              "Heidegger refuses to call Dasein a 'subject' or 'person.' Why? What is at stake in that refusal — and how would Wojtyła or Stein respond?",
              "Compare Heidegger's conscience (Gewissen) with Wojtyła's. Are they describing the same phenomenon?",
              "What does Heidegger's thrownness share with the scholastic notion of contingency — and where does it depart?",
            ],
            keyIdeas: ["Dasein vs. person", "Being-in-the-world", "Thrownness / facticity", "Authenticity without a substantial self"],
          },
        ],
      },
      {
        phase: "Phase 5", title: "Synthesis", weeks: "Weeks 12–13", color: "#d97706",
        description: "Bring together the scholastic, phenomenological, and communitarian threads into your own account of personhood.",
        units: [
          {
            title: "Capstone: What Is a Person?",
            readings: [
              { text: "John Crosby — The Selfhood of the Human Person (Ch. 5–6: incommunicability and conscience)", type: "primary" },
              { text: "Return to the thinker from this course who most resonated with you", type: "primary" },
            ],
            exercises: [
              "Write a 3-page essay: What is a person? Draw on at least three thinkers from this course — scholastic, phenomenological, and communitarian.",
              "Final reflection: How has this course changed how you understand your own existence — your interiority, freedom, and relationships?",
            ],
            keyIdeas: ["Incommunicability of the person", "Your own synthesis", "Person as unrepeatable"],
          },
        ],
      },
    ],
  },
  {
    id: "existentialism",
    label: "Christian Existentialism",
    color: "#7c3aed",
    weeks: "12 weeks",
    description: "Christian existentialism asks what it means to exist as a person before God — in freedom, mystery, suffering, and hope. Less systematic than the other courses, it works through diaries, dramas, and meditations, centering Marcel and his precursors.",
    prereq: true,
    phases: [
      {
        phase: "Phase 1", title: "Precursors: Medieval and Modern", weeks: "Weeks 1–3", color: "#92400e",
        description: "Christian existentialism has deep medieval roots in accounts of interiority, contingency, and the restless heart — and a modern precursor in Kierkegaard, who first posed existence as a philosophical problem.",
        units: [
          {
            title: "Augustine & Boethius: Interiority and Contingency",
            readings: [
              { text: "Augustine — Confessions (Books I, VIII, X)", type: "primary" },
              { text: "Boethius — Consolation of Philosophy (Books II–III)", type: "primary" },
              { text: "Étienne Gilson — The Spirit of Medieval Philosophy (Ch. 10: Christian existentialism avant la lettre)", type: "supplemental" },
            ],
            exercises: [
              "Augustine's restlessness: 'our heart is restless until it rests in Thee.' Is this a philosophical claim, a phenomenological description, or both?",
              "Boethius writes from a prison cell awaiting execution. How does his situation shape his philosophical argument? What does existential threat reveal philosophically?",
            ],
            keyIdeas: ["Interiority", "Contingency of created being", "Restlessness and desire", "Consolation vs. despair"],
          },
          {
            title: "Kierkegaard: Existence, Stages, and the Leap",
            readings: [
              { text: "Søren Kierkegaard — Either/Or (Part II: the ethical stage, Judge Wilhelm's letters)", type: "primary" },
              { text: "Søren Kierkegaard — Fear and Trembling (Problemata I–II)", type: "primary" },
              { text: "Søren Kierkegaard — The Sickness Unto Death (Part I, Section A)", type: "primary" },
            ],
            exercises: [
              "Describe the three stages of existence in your own words. Can you identify moments in your own life corresponding to each?",
              "Kierkegaard's Abraham faces a 'teleological suspension of the ethical.' Is this coherent, or is it a recipe for fanaticism? Write your honest response.",
            ],
            keyIdeas: ["Existence precedes essence (avant la lettre)", "Three stages: aesthetic / ethical / religious", "The leap of faith", "Anxiety and despair", "The single individual"],
          },
        ],
      },
      {
        phase: "Phase 2", title: "Gabriel Marcel: Mystery and Participation", weeks: "Weeks 4–7", color: "#7c3aed",
        description: "Marcel is the center of gravity of this course. His phenomenology of existence — worked out in diaries and dramas rather than treatises — is one of the 20th century's most profound accounts of what it means to be a person in relation to being, to others, and to God.",
        units: [
          {
            title: "Problem, Mystery, and Being",
            readings: [
              { text: "Gabriel Marcel — 'On the Ontological Mystery' (essay, in The Philosophy of Existentialism)", type: "primary" },
              { text: "Gabriel Marcel — Being and Having (Part I)", type: "primary" },
              { text: "Thomas Anderson — A Commentary on Gabriel Marcel's The Mystery of Being (Ch. 2)", type: "supplemental" },
            ],
            exercises: [
              "Marcel distinguishes a problem (before me, to be solved) from a mystery (I am inside it, implicated). Apply this to three concrete cases.",
              "Marcel claims 'being is participation.' How does this echo the Thomistic esse from the other courses — and where does Marcel depart from Aquinas?",
            ],
            keyIdeas: ["Problem vs. mystery", "Being as participation", "Ontological exigence", "Having vs. being"],
          },
          {
            title: "Incarnate Subjectivity and the Other",
            readings: [
              { text: "Gabriel Marcel — The Mystery of Being (Vol. I, Ch. 1–4)", type: "primary" },
              { text: "Gabriel Marcel — Homo Viator (Ch. 1–2: hope and the structure of existence)", type: "primary" },
            ],
            exercises: [
              "Marcel argues that I am my body — not that I have a body. Do a phenomenological description of an experience that illustrates this.",
              "How does Marcel's account of the encounter with the other compare to Levinas's? (If you've done the Thomism course, compare also with Stein.)",
            ],
            keyIdeas: ["Incarnate subjectivity", "I am my body", "The Thou", "Presence vs. absence", "Homo viator (man as wayfarer)"],
          },
          {
            title: "Fidelity, Hope, and Love",
            readings: [
              { text: "Gabriel Marcel — Being and Having (Part II: fidelity and consecration)", type: "primary" },
              { text: "Gabriel Marcel — Homo Viator (Ch. 3: the creative vow; Ch. 5: hope)", type: "primary" },
            ],
            exercises: [
              "Marcel treats fidelity and hope not as virtues but as ontological stances — ways of relating to being itself. Do a phenomenological description of a moment of genuine fidelity.",
              "How does Marcel's hope differ from mere optimism? What makes it an ontological rather than a psychological category?",
            ],
            keyIdeas: ["Creative fidelity", "Hope as ontological", "Against despair", "Love as the recognition of being"],
          },
        ],
      },
      {
        phase: "Phase 3", title: "Further Voices", weeks: "Weeks 8–10", color: "#0891b2",
        description: "Ricoeur, von Balthasar, and Guardini each extend the Christian existentialist impulse in distinctive directions — hermeneutics, theological aesthetics, and the concrete encounter with liturgy and culture.",
        units: [
          {
            title: "Paul Ricoeur: Fallibility, Narrative, and Hope",
            readings: [
              { text: "Paul Ricoeur — Fallible Man (Part I: the fragility of the human person)", type: "primary" },
              { text: "Paul Ricoeur — 'Hope and the Structure of Philosophical Systems' (essay)", type: "primary" },
              { text: "Dan Zahavi — Subjectivity and Selfhood (Ch. 6)", type: "supplemental" },
            ],
            exercises: [
              "Ricoeur argues that human beings are constitutively fallible — not accidentally corrupt but structurally vulnerable. How does this relate to Marcel's homo viator?",
              "How does Ricoeur's narrative account of identity connect to the existentialist theme of the self as a project?",
            ],
            keyIdeas: ["Fallibility as structural", "Narrative identity", "Detour through symbols", "Eschatological hope"],
          },
          {
            title: "Hans Urs von Balthasar: Theological Aesthetics and Existence",
            readings: [
              { text: "Hans Urs von Balthasar — The Glory of the Lord, Vol. I (Ch. 1–2: seeing the form)", type: "primary" },
              { text: "Hans Urs von Balthasar — Heart of the World (Ch. 1–3)", type: "primary" },
              { text: "Aidan Nichols — The Word Has Been Abroad (Ch. 2: the theological aesthetic)", type: "supplemental" },
            ],
            exercises: [
              "Von Balthasar insists that divine glory is perceived aesthetically — as form and splendor — before it can be argued philosophically. Describe an experience of beauty that felt like an encounter with something beyond yourself.",
              "How does von Balthasar's approach compare with Marcel's? Both resist system — what do they share, and where do they differ?",
            ],
            keyIdeas: ["Theological aesthetics", "Glory / Herrlichkeit", "Form and splendor", "Existence as drama"],
          },
          {
            title: "Romano Guardini: The Concrete, the Personal, the Sacred",
            readings: [
              { text: "Romano Guardini — The Spirit of the Liturgy (Ch. 1–4)", type: "primary" },
              { text: "Romano Guardini — The Lord (Part I, Ch. 1–3)", type: "primary" },
            ],
            exercises: [
              "Guardini argues that the liturgy is a form of play — purposeless in the utilitarian sense, but deeply ordered. Does this fit your own experience of ritual or worship?",
              "How does Guardini's portrait of Christ in The Lord reflect personalist and existentialist themes? What kind of philosophical anthropology is implied?",
            ],
            keyIdeas: ["Concrete vs. abstract", "Liturgy as personal encounter", "The sacred", "Christ as the fully realized person"],
          },
        ],
      },
      {
        phase: "Phase 4", title: "Synthesis", weeks: "Weeks 11–12", color: "#d97706",
        description: "Draw the threads of Christian existentialism together into your own account of what it means to exist as a person.",
        units: [
          {
            title: "Capstone: Existence, Mystery, and the Person Before God",
            readings: [
              { text: "Return to Marcel — 'On the Ontological Mystery'", type: "primary" },
              { text: "Return to one other thinker from this course who most resonated with you", type: "primary" },
            ],
            exercises: [
              "Write a 3-page reflection: What does it mean to exist as a person in relation to mystery? Draw on at least three thinkers from this course.",
              "Final journal: How has this course changed how you experience or think about hope, fidelity, love, or the sacred in your own life?",
            ],
            keyIdeas: ["Your own voice", "Existence as gift and task", "Mystery as invitation"],
          },
        ],
      },
    ],
  },
];

const PREREQ = {
  title: "Shared Foundation",
  subtitle: "Required before any course",
  color: "#475569",
  weeks: "2 weeks",
  description: "Every course in this series assumes familiarity with Brentano's revival of intentionality and the basic shape of Husserl's phenomenological method. Complete this foundation first.",
  units: [
    {
      title: "Brentano & Husserl: Intentionality and the Epoché",
      readings: [
        { text: "Franz Brentano — Psychology from an Empirical Standpoint (Book II, Ch. 1)", type: "primary" },
        { text: "Edmund Husserl — Ideas I (§§1–24)", type: "primary" },
        { text: "Dan Zahavi — Phenomenology: The Basics (Ch. 1–2)", type: "supplemental" },
      ],
      exercises: [
        "Pick one mundane activity and write a 1-page description of exactly what you experience — don't explain why, just describe what appears.",
        "What does the epoché bracket? Does Husserl deny the external world exists? Write a clear, careful answer.",
      ],
      keyIdeas: ["Intentionality", "The natural attitude", "Epoché / bracketing", "Noesis / noema"],
    },
  ],
};

const Badge = ({ type }) => (
  <span style={{
    fontSize: "0.72rem", padding: "2px 8px", borderRadius: 999, fontWeight: 600,
    background: type === "primary" ? "#fef3c7" : "#f1f5f9",
    color: type === "primary" ? "#92400e" : "#64748b"
  }}>{type === "primary" ? "Primary" : "Supplemental"}</span>
);

function Unit({ unit, phaseColor, checkKey, checked, onToggle }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: "0.6rem", border: "1px solid #f0eeec", borderRadius: 8, overflow: "hidden" }}>
      <button onClick={() => setOpen(o => !o)}
        style={{ width: "100%", textAlign: "left", padding: "0.7rem 1rem", background: open ? "#faf9f7" : "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 600, fontSize: "0.93rem", color: "#292524" }}>{unit.title}</span>
        <span style={{ color: "#a8a29e", fontSize: "0.85rem" }}>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div style={{ padding: "0 1rem 0.9rem", borderTop: "1px solid #f0eeec" }}>
          <div style={{ marginTop: "0.7rem", marginBottom: "0.9rem", display: "flex", flexWrap: "wrap", gap: 5 }}>
            {unit.keyIdeas.map((k, i) => (
              <span key={i} style={{ background: "#f5f5f4", color: "#57534e", fontSize: "0.75rem", padding: "2px 9px", borderRadius: 999, fontStyle: "italic" }}>{k}</span>
            ))}
          </div>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#a8a29e", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 0.4rem" }}>Readings</p>
          {unit.readings.map((r, ri) => {
            const key = `${checkKey}-r${ri}`;
            return (
              <label key={ri} style={{ display: "flex", alignItems: "flex-start", gap: 9, marginBottom: 7, cursor: "pointer" }}>
                <input type="checkbox" checked={!!checked[key]} onChange={() => onToggle(key)} style={{ marginTop: 3, accentColor: phaseColor }} />
                <span style={{ flex: 1, fontSize: "0.86rem", color: checked[key] ? "#a8a29e" : "#292524", textDecoration: checked[key] ? "line-through" : "none" }}>{r.text}</span>
                <Badge type={r.type} />
              </label>
            );
          })}
          <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#a8a29e", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0.9rem 0 0.4rem" }}>Exercises & Reflections</p>
          {unit.exercises.map((ex, ei) => {
            const key = `${checkKey}-e${ei}`;
            return (
              <label key={ei} style={{ display: "flex", alignItems: "flex-start", gap: 9, marginBottom: 7, cursor: "pointer" }}>
                <input type="checkbox" checked={!!checked[key]} onChange={() => onToggle(key)} style={{ marginTop: 3, accentColor: phaseColor }} />
                <span style={{ fontSize: "0.85rem", color: checked[key] ? "#a8a29e" : "#44403c", textDecoration: checked[key] ? "line-through" : "none", fontStyle: "italic" }}>{ex}</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState("foundation");
  const [openPhase, setOpenPhase] = useState(0);
  const [checked, setChecked] = useState({});
  const toggle = key => setChecked(p => ({ ...p, [key]: !p[key] }));

  const activeCourse = COURSES.find(c => c.id === activeTab);
  const countItems = (phases) => phases.flatMap(p => p.units.flatMap(u => [...u.readings, ...u.exercises])).length;
  const countChecked = (prefix) => Object.entries(checked).filter(([k, v]) => k.startsWith(prefix) && v).length;
  const prereqItems = PREREQ.units.flatMap(u => [...u.readings, ...u.exercises]).length;
  const prereqDone = countChecked("pre");
  const prereqPct = Math.round((prereqDone / prereqItems) * 100);

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#fafaf8", minHeight: "100vh", padding: "1.5rem 1rem" }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <p style={{ color: "#64748b", fontStyle: "italic", fontSize: "0.85rem", margin: "0 0 4px" }}>Self-Study Series</p>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", color: "#1c1917", margin: 0 }}>Philosophy of Person & Being</h1>
          <p style={{ color: "#78716c", fontSize: "0.88rem", margin: "6px 0 0" }}>Three courses tracing phenomenology, personalism, and Christian existentialism — from Aristotle and Boethius to Marcel and von Balthasar.</p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: "1.2rem", flexWrap: "wrap" }}>
          {[{ id: "foundation", label: "① Foundation", color: "#475569" }, ...COURSES.map((c, i) => ({ ...c, label: `${["②","③","④"][i]} ${c.label}` }))].map(tab => (
            <button key={tab.id} onClick={() => { setActiveTab(tab.id); setOpenPhase(0); }}
              style={{
                padding: "0.45rem 0.9rem", borderRadius: 999, border: "none", cursor: "pointer",
                fontSize: "0.82rem", fontWeight: 600,
                background: activeTab === tab.id ? tab.color : "#f1f0ef",
                color: activeTab === tab.id ? "#fff" : "#78716c",
                transition: "all 0.15s"
              }}>{tab.label}</button>
          ))}
        </div>

        {activeTab === "foundation" && (
          <div>
            <div style={{ background: "#fff", border: "1px solid #e7e5e4", borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                <div>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.07em" }}>Shared Foundation · {PREREQ.weeks}</span>
                  <h2 style={{ margin: "4px 0 6px", fontSize: "1.2rem", color: "#1c1917" }}>{PREREQ.title}</h2>
                  <p style={{ color: "#78716c", fontSize: "0.88rem", margin: 0 }}>{PREREQ.subtitle}</p>
                </div>
                <span style={{ background: "#f1f5f9", color: "#475569", fontSize: "0.78rem", padding: "4px 12px", borderRadius: 999, fontWeight: 600 }}>Complete first</span>
              </div>
              <div style={{ marginTop: "1rem", background: "#f1f0ef", borderRadius: 999, height: 6 }}>
                <div style={{ height: 6, borderRadius: 999, background: "#475569", width: `${prereqPct}%`, transition: "width 0.4s" }} />
              </div>
              <p style={{ fontSize: "0.76rem", color: "#a8a29e", margin: "4px 0 0" }}>{prereqDone} of {prereqItems} items ({prereqPct}%)</p>
              <p style={{ color: "#78716c", fontSize: "0.86rem", margin: "1rem 0 0.9rem" }}>{PREREQ.description}</p>
              {PREREQ.units.map((u, ui) => (
                <Unit key={ui} unit={u} phaseColor="#475569" checkKey={`pre-u${ui}`} checked={checked} onToggle={toggle} />
              ))}
            </div>
            <div style={{ background: "#fef9f0", border: "1px solid #fde68a", borderRadius: 10, padding: "0.9rem 1.1rem" }}>
              <p style={{ margin: 0, fontSize: "0.85rem", color: "#92400e" }}>
                <strong>Suggested order:</strong> Complete the Foundation, then take the courses in any order — though <em>Phenomenology & Thomism</em> → <em>Personalism</em> → <em>Christian Existentialism</em> builds most naturally from metaphysical scaffolding to lived reflection.
              </p>
            </div>
          </div>
        )}

        {activeCourse && (() => {
          const total = countItems(activeCourse.phases);
          const done = countChecked(activeCourse.id);
          const pct = Math.round((done / total) * 100);
          return (
            <div>
              <div style={{ background: "#fff", border: "1px solid #e7e5e4", borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: activeCourse.color, textTransform: "uppercase", letterSpacing: "0.07em" }}>{activeCourse.weeks}</span>
                <h2 style={{ margin: "4px 0 6px", fontSize: "1.25rem", color: "#1c1917" }}>{activeCourse.label}</h2>
                <p style={{ color: "#78716c", fontSize: "0.88rem", margin: 0 }}>{activeCourse.description}</p>
                <div style={{ marginTop: "1rem", background: "#f1f0ef", borderRadius: 999, height: 6 }}>
                  <div style={{ height: 6, borderRadius: 999, background: activeCourse.color, width: `${pct}%`, transition: "width 0.4s" }} />
                </div>
                <p style={{ fontSize: "0.76rem", color: "#a8a29e", margin: "4px 0 0" }}>{done} of {total} items ({pct}%)</p>
              </div>
              {activeCourse.phases.map((phase, pi) => (
                <div key={pi} style={{ marginBottom: "1rem", borderRadius: 12, overflow: "hidden", border: "1px solid #e7e5e4", background: "#fff" }}>
                  <button onClick={() => setOpenPhase(openPhase === pi ? -1 : pi)}
                    style={{ width: "100%", textAlign: "left", padding: "1rem 1.25rem", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 9, height: 9, borderRadius: "50%", background: phase.color, flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: "0.7rem", fontWeight: 700, color: phase.color, textTransform: "uppercase", letterSpacing: "0.07em" }}>{phase.phase} · {phase.weeks}</span>
                      <div style={{ fontWeight: "bold", fontSize: "1rem", color: "#1c1917" }}>{phase.title}</div>
                      {phase.subtitle && <div style={{ color: "#78716c", fontSize: "0.82rem", fontStyle: "italic" }}>{phase.subtitle}</div>}
                    </div>
                    <span style={{ color: "#a8a29e", fontSize: "0.85rem" }}>{openPhase === pi ? "▲" : "▼"}</span>
                  </button>
                  {openPhase === pi && (
                    <div style={{ borderTop: "1px solid #f5f5f4", padding: "0 1.25rem 1rem" }}>
                      <p style={{ color: "#78716c", fontSize: "0.86rem", margin: "0.75rem 0 0.9rem" }}>{phase.description}</p>
                      {phase.units.map((unit, ui) => (
                        <Unit key={ui} unit={unit} phaseColor={phase.color}
                          checkKey={`${activeCourse.id}-p${pi}-u${ui}`} checked={checked} onToggle={toggle} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        })()}

        <p style={{ textAlign: "center", color: "#c4bdb8", fontSize: "0.78rem", marginTop: "1.2rem" }}>
          Click any phase to expand · Check off readings and exercises as you go
        </p>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
