import type { WorkLogEntry } from '../types/journal'

/**
 * Work-log entries are separated by project so each project can be maintained
 * independently. The combined export at the bottom keeps compatibility with
 * components that display all projects in one journal.
 */

export const portfolioWorkLogEntries: WorkLogEntry[] = [
{
id: 'portfolio-design-direction',
date: '2026-10-09',
title: 'Refining the portfolio visual direction',
summary:
'Reviewed the portfolio design and moved toward a darker editorial style inspired by carefully designed developer portfolios rather than a conventional collection of frontend cards.',
project: 'Portfolio Workspace',
relatedSprint: 'portfolio-workspace-sprint-01',
tasks: [
'Reviewed the visual direction of the existing portfolio.',
'Explored references from the Awwwards portfolio gallery.',
'Defined a more restrained colour palette and stronger typographic hierarchy.',
'Considered how to present technical projects without making the site feel like a generic template.',
],
problemsSolved: [
'Identified that the portfolio needed a stronger visual identity and more emphasis on the projects themselves.',
],
technologies: [
'Vue 3',
'TypeScript',
'Tailwind CSS',
],
context:
'The portfolio was intended to showcase my software engineering experience, but a purely frontend-focused presentation risked making it look like a design exercise rather than a portfolio of technical work.',
goal:
'Create a visual direction that feels more personal, professional, and appropriate for a software engineering portfolio.',
approach:
'I explored portfolio references and focused on the overall composition, typography, spacing, and contrast rather than adding more decorative effects. The direction was a dark editorial interface with restrained accent colours and a clear hierarchy.',
implementation:
'The design direction was translated into guidance for the existing Vue application. The emphasis was on keeping the existing technical structure while refining the presentation and making the projects and development activity more prominent.',
challenges: [
'The portfolio needed to look distinctive without distracting visitors from the technical work.',
'The visual design had to support project details, longer journal articles, and repository information as well as the homepage.',
],
decisions: [
'Keep the existing Vue and TypeScript architecture instead of rebuilding the site around a different framework.',
'Use the Awwwards portfolio gallery as inspiration rather than copying a particular design.',
'Prioritize typography, layout, and content hierarchy over excessive animation or decorative effects.',
],
result:
'A clearer visual direction was established for the portfolio and its future journal and project pages.',
learned:
'A technical portfolio needs to communicate both visual care and engineering substance. The design should make it easier to explore the work, not compete with it.',
reflection:
'The design should continue to be evaluated against real content. Empty states and short placeholder descriptions can make an otherwise polished layout feel unfinished.',
nextSteps: [
'Apply the visual direction consistently across the project and journal pages.',
'Replace placeholder content with accurate project descriptions and development notes.',
'Test the design with longer articles and images.',
],
},
{
id: 'portfolio-journal-architecture',
date: '2026-10-12',
title: 'Structuring the development journal',
summary:
'Designed a centralized TypeScript content structure for current projects, daily development entries, and sprint retrospectives, keeping the content separate from its Vue presentation.',
project: 'Portfolio Workspace',
relatedSprint: 'portfolio-workspace-sprint-01',
tasks: [
'Separated current project information, work-log entries, and sprint articles into distinct data collections.',
'Reviewed the TypeScript interfaces used by the journal.',
'Considered how entries could reference related projects and sprints.',
'Planned a structure for documenting context, implementation, challenges, decisions, and reflection.',
],
problemsSolved: [
'Established a repeatable way to add journal content without rewriting page components for every new entry.',
],
technologies: [
'Vue 3',
'TypeScript',
'Vite',
],
context:
'The portfolio needed to become more than a collection of finished projects. I also wanted it to document the design and development process throughout the semester.',
goal:
'Create a content structure that would remain manageable as the number of work-log entries and sprint articles increased.',
approach:
'I kept the content in centralized TypeScript arrays and used shared types to define the expected structure. This keeps the journal data separate from the Vue components that display it.',
implementation:
'The journal structure distinguishes current project summaries from dated work-log entries and longer sprint retrospectives. The entry fields support explanations of the context, goals, implementation, challenges, decisions, results, and next steps.',
challenges: [
'Short development updates and full sprint retrospectives need different levels of detail.',
'The structure must allow optional sections without rendering empty headings in the user interface.',
],
decisions: [
'Keep content in TypeScript files because this fits the existing application and makes publishing changes straightforward.',
'Separate the data model from presentation so the journal can evolve without duplicating content across Vue components.',
],
result:
'The centralized content approach provides a foundation for publishing development notes throughout the semester.',
learned:
'A consistent content structure makes it easier to write useful technical documentation because the important questions are visible when creating each entry.',
reflection:
'The content model should support visual evidence and longer explanations, while the public pages need to remain easy to scan as more entries accumulate.',
nextSteps: [
'Add image and caption support to the journal types and presentation components.',
'Make work-log entries collapsible on sprint pages.',
'Populate the journal with accurate project notes and useful visual documentation.',
],
},
{
id: 'portfolio-journal-and-integrations',
date: '2026-10-13',
title: 'Connecting portfolio content with repository activity',
summary:
'Refined the portfolio roadmap to connect project information, development notes, sprint articles, and recent repository activity in one coherent experience.',
project: 'Portfolio Workspace',
relatedSprint: 'portfolio-workspace-sprint-01',
tasks: [
'Reviewed how current projects, work-log entries, and sprint articles should relate to each other.',
'Planned links between journal entries, project pages, repositories, and commits.',
'Identified the need to remove placeholder entries before publishing the journal.',
'Considered how to keep long sprint pages navigable as more entries are added.',
],
problemsSolved: [
'Clarified how visitors should navigate from a project overview to the development process and supporting repository evidence.',
],
technologies: [
'Vue 3',
'TypeScript',
'GitHub REST API',
'GitLab API',
'Vite',
],
context:
'The portfolio combines project descriptions with repository browsing and a developing journal. These elements are most useful when they provide different views of the same work instead of acting as disconnected pages.',
goal:
'Create a clear relationship between what a project is, how it developed, and where visitors can inspect its repository activity.',
approach:
'I considered linking work-log entries to projects and sprints, sprint articles to related entries, and commit activity to the relevant repository. I also identified the need for concise previews so the amount of content would not overwhelm visitors.',
implementation:
'The existing project and journal data structures provide identifiers and relationship fields that can be used to connect the content. The repository feed remains a separate source of real commit information, while the journal explains the reasoning behind the work.',
challenges: [
'Repository activity and development documentation serve different purposes and should not be treated as interchangeable.',
'The journal needs to remain readable even when the semester produces many entries.',
'The self-hosted GitLab integration may have access or API limitations that need to be handled honestly.',
],
decisions: [
'Keep journal content manually authored so it can explain decisions and lessons that commit messages cannot capture.',
'Use links and summaries to connect related content without duplicating complete articles.',
'Plan for collapsible work-log entries to preserve readability as the journal grows.',
],
result:
'The portfolio roadmap now treats projects, development notes, sprint retrospectives, and repository activity as complementary parts of one software engineering portfolio.',
learned:
'Commits provide evidence of code changes, but they rarely explain the original problem, alternatives considered, or lessons learned. A useful development log needs to capture that missing context.',
reflection:
'The next step is to validate the experience using real content and actual repository responses, rather than judging the portfolio only by its appearance with a small amount of sample data.',
nextSteps: [
'Finish the collapsible work-log presentation.',
'Add real screenshots and diagrams to relevant entries.',
'Verify the repository links and live commit data.',
'Continue adding entries as work progresses throughout the semester.',
],
},
{
  id: 'portfolio-one-page-redesign',
  date: '2026-10-20',
  title: 'Redesigning the portfolio as a one-page experience',
  summary:
    'Explored a more cohesive portfolio experience by combining futuristic, brutalist and editorial design influences into a single continuous scrolling website.',
  project: 'Portfolio Workspace',
  relatedSprint: 'portfolio-workspace-sprint-02',
  tasks: [
    'Explored new portfolio design directions using Figma Make.',
    'Combined futuristic, brutalist and editorial visual influences.',
    'Experimented with oversized typography, asymmetric compositions and strong contrast.',
    'Designed a continuous one-page experience for the main portfolio content.',
    'Considered how projects, personal information and development activity should fit into the new design.',
    'Prepared implementation instructions for Codex using the design as a reference.',
  ],
  problemsSolved: [
    'Moved away from a conventional multi-page developer portfolio toward a more distinctive and cohesive visual experience.',
    'Established a stronger design direction that could showcase technical work without looking like a generic frontend template.',
  ],
  technologies: [
    'Vue 3',
    'TypeScript',
    'Figma Make',
    'Tailwind CSS',
    'Codex',
  ],
  context:
    'The existing portfolio needed a stronger visual identity. I wanted it to communicate my interests as a software engineer while presenting projects and development activity in a more memorable way.',
  goal:
    'Create a visually distinctive one-page portfolio that combines a strong visual identity with practical project and development information.',
  approach:
    'I explored different visual references and combined futuristic interface elements with brutalist typography and editorial composition. The design direction used a dark foundation, off-white text and an acid-lime accent colour.',
  implementation:
    'I explored the visual design in Figma Make and prepared instructions for Codex to translate the design into the existing Vue application. The intended structure connected the introduction, about information, projects, skills, development journal and contact information in one continuous scrolling experience.',
  challenges: [
    'The design needed to be visually ambitious without reducing readability.',
    'The one-page structure needed to accommodate more detailed project and journal content.',
    'The existing application architecture and functionality needed to be preserved during the redesign.',
  ],
  decisions: [
    'Keep the existing Vue and TypeScript application rather than rebuilding the portfolio with a different framework.',
    'Use a continuous scrolling experience with section-based navigation.',
    'Use visual inspiration rather than copying a specific portfolio design.',
    'Prioritize typography, composition and content hierarchy over unnecessary decorative effects.',
  ],
  result:
    'A new visual direction and one-page portfolio design were established, providing a more distinctive foundation for the existing application.',
  learned:
    'A strong portfolio design needs to support the content it presents. Visual experimentation is valuable, but the design also needs to work with real project descriptions and longer development entries.',
  reflection:
    'Translating a visual design into an existing application requires clear implementation guidance. A design reference alone does not guarantee that the resulting page will preserve the intended layout and interactions.',
  nextSteps: [
    'Refine the implementation against the intended design.',
    'Test the one-page layout at different screen sizes.',
    'Replace remaining placeholder content with accurate information.',
    'Improve the presentation of projects and development journal entries.',
  ],
},
{
  id: 'portfolio-impeccable-redesign',
  date: '2026-11-10',
  title: 'Creating a new portfolio design with Impeccable',
  summary:
    'Introduced Impeccable into the Codex workflow to explore a more ambitious and professionally art-directed portfolio design for a software engineer.',
  project: 'Portfolio Workspace',
  relatedSprint: 'portfolio-workspace-sprint-03',
  tasks: [
    'Installed the Impeccable plugin in Codex.',
    'Explored its design-focused commands and capabilities.',
    'Created a detailed design prompt describing my identity and technical interests.',
    'Defined a visual direction combining futuristic, brutalist and editorial influences.',
    'Specified the desired one-page structure and responsive behaviour.',
    'Instructed Codex to preserve the existing Vue and TypeScript architecture.',
  ],
  problemsSolved: [
    'Provided a more structured design workflow instead of relying on generic frontend implementation instructions.',
    'Established clearer creative and technical requirements for the portfolio redesign.',
  ],
  technologies: [
    'Codex',
    'Impeccable',
    'Vue 3',
    'TypeScript',
    'Tailwind CSS',
  ],
  context:
    'After exploring the portfolio design direction, I wanted to improve how AI-assisted development translated creative ideas into an actual interface. A design-focused tool could help make the results more intentional and consistent.',
  goal:
    'Create a distinctive developer portfolio that communicates technical curiosity, creativity and professionalism.',
  approach:
    'I used Impeccable through Codex and provided a detailed creative brief describing the intended visual identity, website structure, content and technical constraints.',
  implementation:
    'The design prompt instructed Codex to inspect the existing repository, work within the current Vue application and create a new one-page experience. The visual direction focused on strong typography, asymmetric layouts, interactive details and a restrained dark colour palette.',
  challenges: [
    'The design needed to look distinctive without becoming a generic AI-generated portfolio.',
    'The creative direction needed to be translated into practical requirements for the existing application.',
    'Visual improvements could not come at the expense of existing functionality or responsiveness.',
  ],
  decisions: [
    'Use Impeccable as a design-focused part of the Codex workflow.',
    'Provide a detailed creative brief rather than a vague request for a better-looking website.',
    'Keep the existing application stack and content as the foundation for the redesign.',
  ],
  result:
    'Codex produced a portfolio design that followed the intended visual direction more closely and provided a stronger foundation for further refinement.',
  learned:
    'AI-assisted frontend development can benefit from more deliberate design direction. Clear creative constraints help produce a more coherent result than simply asking for a modern interface.',
  reflection:
    'A visually successful design is only one part of the work. It still needs to be tested with real content, different screen sizes and the actual functionality of the portfolio.',
  nextSteps: [
    'Refine the presentation of the development journal.',
    'Improve responsive spacing and positioning.',
    'Connect project information to real repository data.',
  ],
},
{
  id: 'portfolio-journal-content-refinement',
  date: '2026-11-12',
  title: 'Improving the development journal structure',
  summary:
    'Reviewed the worklog presentation and underlying journal data to make individual development entries more informative while keeping the journal maintainable.',
  project: 'Portfolio Workspace',
  relatedSprint: 'portfolio-workspace-sprint-03',
  tasks: [
    'Reviewed the existing WorkLogEntry data structure.',
    'Identified that the initial worklog overview showed mainly the summary of each entry.',
    'Explored displaying more information when visitors expand an entry.',
    'Reviewed which journal.ts properties were actually used by the application.',
    'Planned to remove genuinely unused fields and data.',
    'Considered how optional information should be displayed without creating empty sections.',
  ],
  problemsSolved: [
    'Identified a gap between the amount of information stored in the journal and the information visitors could actually see.',
    'Identified the need to keep the journal data structure aligned with its actual presentation.',
  ],
  technologies: [
    'Vue 3',
    'TypeScript',
    'Vite',
  ],
  context:
    'The journal already contained detailed information about development activities, including tasks, challenges, decisions, results and reflections. However, visitors could mainly see short summaries, meaning much of the documented work was not immediately accessible.',
  goal:
    'Make the development journal more informative without making the initial overview cluttered or unnecessarily complicated.',
  approach:
    'I reviewed the existing journal structure and considered which fields would provide useful additional context. The intention was to keep the overview compact while allowing visitors to explore more detailed information when needed.',
  implementation:
    'The planned improvements included expandable worklog details and a review of journal.ts to identify unused properties, constants and entries. The data structure would be kept consistent with the fields actually used by the presentation components.',
  challenges: [
    'Showing more information without overwhelming visitors with long blocks of text.',
    'Removing unused data without accidentally breaking other components.',
    'Keeping optional journal sections consistent when some entries contain more information than others.',
  ],
  decisions: [
    'Keep summaries visible in the initial overview.',
    'Make additional worklog information accessible through an expanded detail view.',
    'Retain useful information even when it is not immediately visible.',
    'Remove only data that is confirmed to be unused throughout the application.',
  ],
  result:
    'A clearer direction was established for improving the amount of information visitors can access while maintaining a manageable journal data structure.',
  learned:
    'A data structure should support the information users actually need to see. Storing detailed information is only valuable if the interface provides a useful way to explore it.',
  reflection:
    'The journal should be tested with realistic entries containing different amounts of information. This will help ensure that the expanded layout remains readable and consistent.',
  nextSteps: [
    'Implement the expanded worklog presentation.',
    'Review all journal data references before removing unused properties.',
    'Verify that the journal remains consistent across desktop and mobile.',
  ],
},
{
  id: 'portfolio-dynamic-repository-integration',
  date: '2026-11-17',
  title: 'Planning dynamic GitHub and GitLab project integration',
  summary:
    'Planned the transition from hardcoded portfolio projects to dynamically retrieved repositories from GitHub and GitLab, while retaining a separate way to present private school projects.',
  project: 'Portfolio Workspace',
  relatedSprint: 'portfolio-workspace-sprint-03',
  tasks: [
    'Reviewed the existing hardcoded project information.',
    'Planned retrieving public repositories through the GitHub API.',
    'Investigated retrieving publicly available projects from the HvA GitLab instance.',
    'Identified that some school repositories are private and cannot be retrieved anonymously.',
    'Designed an approach for manually configuring selected private school projects.',
    'Considered project visibility, ordering and duplicate prevention.',
    'Planned consistent project metadata and presentation across both platforms.',
  ],
  problemsSolved: [
    'Identified how to reduce manually maintained project information for publicly available repositories.',
    'Established a separate approach for projects that cannot be retrieved because of private school repository permissions.',
  ],
  technologies: [
    'Vue 3',
    'TypeScript',
    'GitHub REST API',
    'GitLab API',
    'Vite',
  ],
  context:
    'The portfolio currently relies on manually defined project information. Since my projects are spread across GitHub and the HvA GitLab environment, maintaining all public repository details manually is not ideal.',
  goal:
    'Create a project showcase that uses live repository information where possible while still allowing selected private school projects to be presented.',
  approach:
    'I planned to retrieve public repository metadata from GitHub and GitLab, while maintaining a separate configuration for private projects. This would allow public projects to stay up to date without pretending that private repositories are publicly accessible.',
  implementation:
    'The proposed architecture separates automatically retrieved repositories from manually configured private school projects. The private projects would have editable presentation information and a clear Private School Project label. Public projects would use available repository metadata, with selection and ordering controlled separately.',
  challenges: [
    'The HvA GitLab environment may restrict access to private repositories.',
    'Public APIs can have rate limits or return incomplete repository metadata.',
    'Projects may exist on both platforms and need duplicate handling.',
    'API credentials must not be exposed in frontend code.',
  ],
  decisions: [
    'Retrieve publicly accessible repositories dynamically.',
    'Keep private school projects manually configurable.',
    'Clearly identify private projects instead of displaying broken or misleading repository links.',
    'Keep project selection and presentation separate from the API integration.',
  ],
  result:
    'A clearer integration approach was established for combining public repository data with manually maintained private school projects.',
  learned:
    'A dynamic integration does not mean every piece of content needs to come from an API. Separating public data retrieval from intentional manual content provides more control and handles access restrictions honestly.',
  reflection:
    'The approach still needs to be implemented and tested against actual GitHub and HvA GitLab responses. API permissions and rate limits should be considered before deciding on the final architecture.',
  nextSteps: [
    'Inspect the existing project data and API services.',
    'Implement public GitHub repository retrieval.',
    'Investigate and implement public HvA GitLab repository retrieval.',
    'Create a separate configuration for private school projects.',
    'Test duplicate handling, project selection and API error states.',
  ],
}
]

export const genAiExposedWorkLogEntries: WorkLogEntry[] = [
{
id: 'genai-exposed-concept',
date: '2026-09-16',
title: 'Developing the AI Fortune Teller concept',
summary:
'Explored an interactive crystal-ball concept that uses a conversation with AI to demonstrate how assumptions about a visitor can be generated from collected information.',
project: 'AI Fortune Teller',
tasks: [
'Defined the initial idea for an interactive fortune-telling experience.',
'Explored how a visitor could speak to the installation instead of filling in a traditional questionnaire.',
'Outlined how the experience could end by presenting assumptions made by the AI.',
],
problemsSolved: [
'Connected the idea of an entertaining fortune-telling interaction to a clear demonstration of AI profiling and data privacy.',
],
technologies: [
'Generative AI',
'Large Language Models',
'Speech Recognition',
'Text-to-Speech',
],
context:
'The GenAI Exposed assignment needed a concept that would let visitors experience generative AI while also making them think critically about its consequences. I explored an AI fortune teller because it gives the visitor a reason to interact with the system without immediately making the privacy lesson obvious.',
goal:
'Develop a concept that feels like a playful conversation at first but can later reveal how an AI system interprets information about a person.',
approach:
'I considered a physical crystal ball as the centre of the experience. The visitor would talk to it, the AI would respond in the style of a fortune teller, and the final output would reveal the assumptions made during the conversation. This creates a clear transition from entertainment to reflection.',
implementation:
'At this stage, the work focused on the interaction concept and a possible technical pipeline rather than a finished application. The proposed flow was speech capture, speech recognition, processing by a language model with a defined persona, and spoken responses through text-to-speech.',
challenges: [
'The experience needed to feel natural rather than like a standard chatbot with a decorative crystal ball.',
'The privacy message needed to become clear through the experience without relying only on a warning at the beginning.',
],
decisions: [
'Use a conversational interface so visitors actively provide information during the experience.',
'Present the AI-generated assumptions after the conversation to create a moment of reflection.',
],
result:
'The initial concept connected a recognizable fortune-telling experience to the assignment’s focus on generative AI and its social implications.',
learned:
'The interaction design is important to the message of an AI prototype. The order in which information is collected and revealed can change how visitors understand the system.',
reflection:
'The concept still needs to be tested with users. In particular, it will be important to distinguish between information a visitor explicitly shares and assumptions the AI generates.',
nextSteps: [
'Define the exact information the prototype should collect and process.',
'Develop a persona and conversation flow for the fortune teller.',
'Create a visual prototype that can be evaluated before building the complete interaction.',
],
},
{
id: 'genai-exposed-persona-prototype',
date: '2026-09-22',
title: 'Designing the persona reveal',
summary:
'Explored how the AI Fortune Teller could present its conclusions in a printable persona sheet, turning the end of the conversation into a tangible part of the experience.',
project: 'AI Fortune Teller',
relatedSprint: 'genai-exposed-sprint-01',
tasks: [
'Explored a printable A4 layout for the persona revealed after a conversation.',
'Considered how the visual design could make the results feel like a finished prototype rather than raw chatbot output.',
'Separated the presentation of the persona from the conversation itself.',
],
problemsSolved: [
'Identified a tangible output that visitors could read after the conversational interaction.',
],
technologies: [
'Generative AI',
'LLM Prompt Design',
'Visual Prototyping',
],
context:
'The original idea relied on revealing the AI’s assumptions after a visitor had spoken to the fortune teller. A plain text response would communicate the result, but it would not create a particularly memorable physical prototype.',
goal:
'Design an output that organizes the AI’s assumptions into a clear, visually engaging format that could be printed on an A4 sheet.',
approach:
'I explored a persona-sheet format with a clear title, structured information, and space for a visual representation of the person described by the AI. The layout needed to be easy to scan and suitable for use during a prototype demonstration.',
implementation:
'The work focused on the visual direction and content structure of the proposed output. The layout was treated as a prototype that could be refined separately from the speech and language-model components.',
challenges: [
'The result needed to look polished while making it clear that the persona was an AI-generated interpretation, not a verified description of the visitor.',
'The layout needed to fit an A4 page without making the information difficult to read.',
],
decisions: [
'Use a structured printable page rather than displaying only an unformatted paragraph.',
'Treat the persona as the final stage of the interaction, giving visitors something concrete to reflect on.',
],
result:
'The persona sheet became a more tangible direction for the prototype and created a separate visual component that could be evaluated and improved.',
learned:
'The output format is part of the user experience. Visual hierarchy can help people distinguish the AI’s claims, the information behind them, and the uncertainty of its conclusions.',
reflection:
'The design should avoid making speculative AI conclusions look scientifically verified. The final layout should make the distinction between shared information and generated assumptions understandable.',
nextSteps: [
'Refine the A4 layout and test its readability at print size.',
'Determine which information should appear on the persona sheet.',
'Connect the planned output to the conversation flow and ethical analysis.',
],
},
{
id: 'genai-exposed-data-safety',
date: '2026-10-06',
title: 'Focusing the ethical analysis on data safety',
summary:
'Narrowed the ethical focus of the AI Fortune Teller to data safety and data misuse, examining the risks created when conversational information is used to generate assumptions about a visitor.',
project: 'AI Fortune Teller',
relatedSprint: 'genai-exposed-sprint-01',
tasks: [
'Defined data safety as the main dark value for the prototype.',
'Explored the difference between protecting data and exposing it to unauthorized access or unintended use.',
'Connected the ethical concern to the information collected during the proposed conversation.',
'Identified the need to explain the ethical analysis using credible sources.',
],
problemsSolved: [
'Gave the prototype a clearer ethical focus instead of trying to address every possible risk of generative AI at once.',
],
technologies: [
'Generative AI',
'LLM Prompt Design',
'Privacy by Design',
],
context:
'The fortune-teller concept depends on information shared by a visitor and on the AI’s interpretation of that information. This creates an opportunity to examine what happens when data is exposed, reused, or interpreted in ways the visitor does not expect.',
goal:
'Make the ethical issue specific enough to guide the prototype’s design and its explanation to visitors.',
approach:
'I focused on data safety and the related risk of data misuse. This includes the distinction between protecting information against unauthorized access, loss, or modification and using information for purposes beyond what a visitor expects.',
implementation:
'The ethical focus was connected to the proposed interaction: the system receives conversational input, processes it, and produces a profile-like output. This makes it important to consider what is retained, what is revealed, and how confidently the output describes the visitor.',
challenges: [
'The prototype needs to demonstrate a privacy risk without presenting speculative risks as confirmed behaviour of the implementation.',
'The ethical explanation must distinguish between the information a visitor shares and conclusions generated by the model.',
],
decisions: [
'Use data safety and data misuse as the central ethical focus for the concept.',
'Connect the ethical analysis directly to the visitor’s interaction with the prototype.',
],
result:
'The concept now has a clearer ethical direction that can inform the technical design, the persona reveal, and the explanation presented to visitors.',
learned:
'A useful ethical analysis needs to be connected to concrete design choices. The way data is collected, processed, presented, and retained is as important as the model’s conversational behaviour.',
reflection:
'The next iteration should document the actual data flow and distinguish implemented safeguards from recommendations that have not yet been implemented.',
nextSteps: [
'Document the intended data flow and retention behaviour.',
'Review the conversation and persona prompts for misleading or overly confident conclusions.',
'Use the ethical analysis to guide the next prototype iteration.',
],
},
{
  id: 'genai-exposed-technical-architecture',
  date: '2026-10-16',
  title: 'Defining the technical architecture of GenAI Exposed',
  summary:
    'Translated the AI Fortune Teller concept into a technical architecture by dividing the experience into separate components for speech, image recognition, language processing and audio output.',
  project: 'AI Fortune Teller',
  relatedSprint: 'genai-exposed-sprint-01',
  tasks: [
    'Mapped out the technical pipeline required for the interactive experience.',
    'Identified speech-to-text, image recognition, LLM processing and text-to-speech as separate components.',
    'Divided technical responsibilities within the project team.',
    'Defined image recognition as my main development responsibility.',
    'Considered how information from different components could be combined into one final persona.',
  ],
  problemsSolved: [
    'Turned a broad interactive concept into smaller technical components that could be developed and integrated separately.',
  ],
  technologies: [
    'Python',
    'Generative AI',
    'Large Language Models',
    'Speech Recognition',
    'Text-to-Speech',
    'Computer Vision',
  ],
  context:
    'After establishing the initial concept, the next challenge was figuring out how to turn it into a working prototype. The experience required several different AI and multimedia technologies to work together.',
  goal:
    'Create a technical foundation that allows visitors to interact with the fortune teller through speech while the system also analyses visual information.',
  approach:
    'I broke the experience down into individual components and considered what information each component would produce. This made it easier to divide development responsibilities and plan the integration between them.',
  implementation:
    'The proposed pipeline consisted of speech capture, speech recognition, image recognition, language-model processing and spoken responses. The image recognition component would produce structured observations and assumptions that could later be combined with information from the conversation.',
  challenges: [
    'Different components needed to exchange information in a consistent format.',
    'The final persona needed to distinguish between information explicitly shared by the visitor and assumptions generated by AI.',
    'The architecture needed to remain manageable for a team developing separate components.',
  ],
  decisions: [
    'Develop image recognition as a separate component rather than combining everything into one application.',
    'Use structured data to make communication between components easier.',
    'Keep the final persona generation separate from the individual input-processing components.',
  ],
  result:
    'The project gained a clearer technical direction and a division of responsibilities that could guide the implementation of the individual components.',
  learned:
    'Breaking a complex AI experience into smaller components makes development more manageable, but requires clear agreements about data formats and integration.',
  reflection:
    'The architecture still needed to be validated through actual integration. A component working independently does not automatically mean it will work correctly as part of the complete experience.',
  nextSteps: [
    'Research suitable image recognition models.',
    'Define the JSON structure for visual observations and assumptions.',
    'Develop and test the image recognition component independently.',
  ],
},
{
  id: 'genai-exposed-image-recognition-design',
  date: '2026-10-20',
  title: 'Researching image recognition and responsible AI assumptions',
  summary:
    'Explored how image recognition could identify visible characteristics of visitors and turn those observations into cautious, experimental assumptions without presenting speculation as fact.',
  project: 'AI Fortune Teller',
  relatedSprint: 'genai-exposed-sprint-02',
  tasks: [
    'Researched how a vision-language model could analyse webcam images.',
    'Defined the difference between directly visible observations and AI-generated assumptions.',
    'Explored examples of assumptions based on clothing and accessories.',
    'Designed a structured JSON output for observations and assumptions.',
    'Identified sensitive characteristics and types of assumptions that should be avoided.',
    'Considered confidence levels and explanations for generated assumptions.',
  ],
  problemsSolved: [
    'Established a distinction between what the camera can visibly identify and what the AI merely interprets from those observations.',
    'Created clearer boundaries for generating personal but speculative assumptions.',
  ],
  technologies: [
    'Computer Vision',
    'Vision-Language Models',
    'JSON',
    'Prompt Engineering',
    'Generative AI',
  ],
  context:
    'The image recognition component needed to contribute something interesting to the fortune teller experience. Simply describing objects in an image would not create the personal interaction intended by the concept.',
  goal:
    'Develop an approach that allows the AI to make interesting assumptions based on visible information while communicating the uncertainty of those conclusions.',
  approach:
    "I explored separating the model output into two categories. Observations describe visible characteristics, while assumptions interpret those observations. For example, a sports shirt could lead to a possible interest in sports, but should not be treated as proof of someone's hobbies.",
  implementation:
    'I designed a JSON-based output structure with separate observation and assumption fields. Assumptions were intended to reference the observation they were based on and include a confidence level. I also established limitations to prevent sensitive personal conclusions.',
  challenges: [
    'The assumptions needed to feel personal and interesting without becoming overly intrusive.',
    'The model could easily present guesses as facts if the prompt did not establish clear boundaries.',
    'The output needed to remain predictable enough for integration with the rest of the application.',
  ],
  decisions: [
    'Separate visible observations from experimental assumptions.',
    'Require assumptions to be connected to an actual observation.',
    'Use confidence levels to communicate uncertainty.',
    'Avoid sensitive personal characteristics and conclusions that cannot reasonably be derived from visible information.',
  ],
  result:
    'A clearer approach was established for the image recognition component, including its output structure and the boundaries within which the model should operate.',
  learned:
    'The way an AI system communicates uncertainty is just as important as the information it produces. A plausible-sounding assumption can easily be mistaken for a verified fact.',
  reflection:
    'The proposed boundaries needed to be tested against actual model responses. A carefully written prompt does not guarantee that a model will always follow its instructions.',
  nextSteps: [
    'Test different vision-language models with real webcam images.',
    'Implement the JSON response structure.',
    'Evaluate whether the generated assumptions are interesting, understandable and appropriately cautious.',
  ],
},
{
  id: 'genai-exposed-local-vision-models',
  date: '2026-10-23',
  title: 'Exploring local vision models with Ollama',
  summary:
    'Investigated whether image recognition could run locally instead of relying on a cloud-based AI service, taking hardware limitations, response speed and visitor privacy into account.',
  project: 'AI Fortune Teller',
  relatedSprint: 'genai-exposed-sprint-02',
  tasks: [
    'Initially explored using a cloud-based AI API for image recognition.',
    'Investigated the possibility of running vision-language models locally.',
    'Reviewed available hardware and its limitations.',
    'Explored different models available through Ollama.',
    'Tested Qwen3-VL, Gemma and Llama model options.',
    'Compared response quality and processing time.',
  ],
  problemsSolved: [
    'Identified a possible local approach that avoids sending webcam images to an external AI service.',
    'Narrowed down the available models to options that could be tested on the development computer.',
  ],
  technologies: [
    'Python',
    'Ollama',
    'Qwen3-VL',
    'Gemma',
    'Llama',
    'Vision-Language Models',
  ],
  context:
    'The image recognition component would process camera images of visitors. Using a cloud-based service was initially considered, but processing images locally offered potential privacy benefits and greater control over the data.',
  goal:
    'Determine whether a local vision-language model could provide sufficiently useful results without requiring more powerful hardware.',
  approach:
    'I investigated locally available models and tested their ability to interpret images. I also considered the limitations of the development computer, which has 16 GB of RAM and Intel Iris Xe graphics rather than a dedicated NVIDIA or AMD GPU.',
  implementation:
    'I used Ollama to explore models including qwen3-vl:2b, gemma4:e2b and llama3.2:3b. The tests focused on whether the models could accept image input, return usable descriptions and operate within a reasonable amount of time.',
  challenges: [
    'The available hardware limited which models and configurations were practical.',
    'Some model configurations produced slow responses or output that was not immediately usable.',
    'The model needed to understand visual information rather than simply process text prompts.',
  ],
  decisions: [
    'Investigate local inference before committing to an external AI service.',
    'Prioritize smaller vision-language models that could run on the available hardware.',
    'Evaluate actual response quality and speed rather than choosing a model based only on its specifications.',
  ],
  result:
    'Ollama provided a practical way to experiment with local vision-language models and identify suitable candidates for the prototype.',
  learned:
    'Running AI locally introduces different trade-offs from using cloud services. Hardware limitations, model size and inference speed all influence the final user experience.',
  reflection:
    'The initial model tests showed that choosing a model was only part of the challenge. The configuration and format of the request also had a significant effect on the result.',
  nextSteps: [
    'Find a reliable model configuration that returns usable image descriptions.',
    'Integrate webcam input with the local inference process.',
    'Optimize the prompt and request frequency to keep response times manageable.',
  ],
},
{
  id: 'genai-exposed-image-recognition-application',
  date: '2026-10-27',
  title: 'Building the standalone image recognition application',
  summary:
    'Developed a standalone desktop application for testing the image recognition component, combining webcam input, local AI processing and a structured JSON output interface.',
  project: 'AI Fortune Teller',
  relatedSprint: 'genai-exposed-sprint-02',
  tasks: [
    'Developed a standalone application using Python and PySide6.',
    'Implemented webcam selection and camera input.',
    'Designed a side-by-side interface for the webcam and recognition results.',
    'Connected the application to the local Ollama model.',
    'Planned a single structured response containing observations and assumptions.',
    'Considered adaptive image analysis instead of continuously processing every frame.',
    'Implemented temporary session handling and cleanup when the application stops.',
  ],
  problemsSolved: [
    'Created a way to test image recognition independently from the other GenAI Exposed components.',
    'Made it easier to inspect the model output while testing different camera inputs and prompts.',
  ],
  technologies: [
    'Python',
    'PySide6',
    'OpenCV',
    'Ollama',
    'Qwen3-VL',
    'JSON',
  ],
  context:
    'Testing image recognition through individual scripts was not ideal for repeatedly evaluating the camera input and model output. A small desktop interface would make development and debugging more practical.',
  goal:
    'Build a standalone testing application that allows me to inspect webcam input and the AI-generated analysis in one place.',
  approach:
    'I used PySide6 for the desktop interface and OpenCV for webcam access. The interface was designed to show the selected camera alongside the structured recognition output, making it easier to evaluate the model during development.',
  implementation:
    'The application was designed around a webcam preview and a separate JSON result panel. The backend communicates with Ollama to analyse images. I also considered adaptive request frequency to avoid unnecessary processing and temporary session storage so that session information would not remain after stopping the application.',
  challenges: [
    'Webcam access and camera selection needed to work correctly on Windows.',
    'The local model could take long enough to affect the interaction if requests were made too frequently.',
    'The application needed to handle incomplete or unexpected model responses.',
  ],
  decisions: [
    'Use PySide6 to create a standalone desktop testing interface.',
    'Keep the camera preview and JSON output visible next to each other.',
    'Use structured output so the results can later be integrated with other components.',
    'Avoid retaining session information beyond the active testing session.',
  ],
  result:
    'A dedicated desktop application provided a more practical environment for developing and evaluating the image recognition component independently.',
  learned:
    'A separate testing interface can make AI development considerably easier because it provides immediate visibility into both the input and the model output.',
  reflection:
    'The application still needed reliable camera handling and a model configuration that consistently returned valid results. Performance also needed to be considered before integrating the component into the physical installation.',
  nextSteps: [
    'Resolve camera initialization and selection issues.',
    'Improve the reliability of the local model responses.',
    'Refine the output prompt and response handling.',
    'Prepare the component for integration with the main prototype.',
  ],
},
{
  id: 'genai-exposed-local-vision-debugging',
  date: '2026-11-03',
  title: 'Getting local image recognition working reliably',
  summary:
    'Investigated why the local vision model sometimes returned empty responses and identified a working Qwen3-VL configuration that could successfully describe webcam images.',
  project: 'AI Fortune Teller',
  relatedSprint: 'genai-exposed-sprint-02',
  tasks: [
    'Investigated model responses that contained no usable text.',
    'Compared the available Qwen3-VL model configurations.',
    'Tested the qwen3-vl:2b and qwen3-vl:2b-instruct configurations.',
    'Checked the local model process and resource usage.',
    'Measured the response time of a successful image recognition request.',
    'Verified that the model could return content from an image.',
  ],
  problemsSolved: [
    'Identified a model configuration that returned usable image descriptions instead of empty content.',
    'Established a working baseline for further development of the image recognition component.',
  ],
  technologies: [
    'Python',
    'Ollama',
    'Qwen3-VL',
    'Vision-Language Models',
    'JSON',
  ],
  context:
    'Although the local model was running and receiving image input, some requests resulted in responses without usable content. This prevented the image recognition component from reliably providing information to the rest of the application.',
  goal:
    'Find out why the model was not returning usable descriptions and establish a reliable configuration for local image recognition.',
  approach:
    'I compared model configurations and inspected their responses instead of assuming that a running Ollama process meant the image recognition request was working correctly.',
  implementation:
    'Testing showed that the qwen3-vl:2b-instruct configuration successfully returned content from image input. One successful test completed in approximately 8.41 seconds, providing a useful performance baseline for the prototype.',
  challenges: [
    'A model could appear to process an image successfully while returning an empty content field.',
    'It was necessary to distinguish between model execution problems and problems with the returned response.',
    'The available hardware limited how much model performance could be improved.',
  ],
  decisions: [
    'Use the working Instruct configuration as the baseline for further testing.',
    'Evaluate the actual response content instead of relying only on whether the model request completed.',
    'Keep response time in mind when designing the interaction frequency.',
  ],
  result:
    'Local image recognition successfully returned usable image descriptions, allowing development to continue with a working vision-language model.',
  learned:
    'Debugging AI integrations requires checking the complete response structure, not just whether the request succeeds. Model variants can behave differently even when their names are similar.',
  reflection:
    'A response time of approximately eight seconds was promising, but the complete experience still needed to be evaluated with the actual camera workflow and additional prompts.',
  nextSteps: [
    'Improve the prompt for more consistent observations and assumptions.',
    'Test the model with different images and lighting conditions.',
    'Integrate the working configuration into the desktop application.',
  ],
},
{
  id: 'genai-exposed-prompt-optimization',
  date: '2026-11-06',
  title: 'Refining the image recognition prompt',
  summary:
    'Optimized the local vision model prompt to produce more useful personal assumptions while reducing unnecessary instructions, token usage and response overhead.',
  project: 'AI Fortune Teller',
  relatedSprint: 'genai-exposed-sprint-02',
  tasks: [
    'Reviewed the existing image recognition prompt.',
    'Reduced unnecessary instructions and lengthy explanations.',
    'Limited the number of observations and assumptions.',
    'Required assumptions to reference the observations they were based on.',
    'Added confidence levels to the generated assumptions.',
    'Reinforced restrictions around sensitive personal characteristics.',
    'Tested examples involving clothing and accessories.',
  ],
  problemsSolved: [
    'Reduced unnecessary prompt complexity for a small local model.',
    'Improved the structure and relevance of the generated assumptions.',
    'Made the output more suitable for use in the final persona.',
  ],
  technologies: [
    'Ollama',
    'Qwen3-VL',
    'Prompt Engineering',
    'JSON',
    'Generative AI',
  ],
  context:
    'The initial prompt contained many detailed instructions, but the local model had limited resources and a relatively small context window. The prompt needed to produce useful results without consuming unnecessary tokens.',
  goal:
    'Create a shorter and more effective prompt that produces structured observations and interesting but cautious assumptions.',
  approach:
    'I focused on keeping only the instructions that directly influence the quality and safety of the output. I also explored how to make assumptions more personal through visible characteristics without allowing the model to make sensitive or unsupported conclusions.',
  implementation:
    'The prompt was refined to limit the number of observations and assumptions, require a direct connection between assumptions and visible evidence, and include confidence levels. The JSON structure remained compact so that the application could process the result more easily.',
  challenges: [
    'A shorter prompt still needed to communicate all important limitations.',
    'The assumptions needed to be more interesting without becoming misleading.',
    'The model needed to return consistent structured output rather than lengthy explanations.',
  ],
  decisions: [
    'Prioritize concise instructions over lengthy descriptions.',
    'Limit the number of generated observations and assumptions.',
    'Require assumptions to reference their supporting observations.',
    'Keep uncertainty visible through confidence levels.',
  ],
  result:
    'The image recognition prompt became more focused and better suited to the constraints of the local vision model.',
  learned:
    'More instructions do not necessarily produce better AI results. A compact prompt with clear priorities can be more effective, especially when working with smaller local models.',
  reflection:
    'The prompt still needs to be evaluated with different people and visual situations. A model producing valid JSON does not automatically mean its assumptions are useful or appropriate.',
  nextSteps: [
    'Test the prompt with a wider variety of webcam images.',
    'Evaluate the relevance and consistency of the generated assumptions.',
    'Use the output in the final persona generation process.',
  ],
}
]

/**
 * No Japan Activities work-log entries were present in the supplied journal.
 * Add real entries here as the project progresses.
 */
export const japanActivitiesWorkLogEntries: WorkLogEntry[] = []

/** Combined list for existing journal components. */
export const workLogEntries: WorkLogEntry[] = [
  ...portfolioWorkLogEntries,
  ...genAiExposedWorkLogEntries,
  ...japanActivitiesWorkLogEntries,
]
