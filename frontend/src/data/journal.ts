import { siteConfig } from '../config/site'
import type { CurrentProject, SprintArticle, WorkLogEntry } from '../types/journal'

export const currentProjects: CurrentProject[] = [
{
id: 'portfolio-workspace',
name: 'Portfolio Workspace',
description:
'A personal software engineering portfolio that showcases projects, development activity, technical decisions, and progress throughout the development process.',
status: 'In Progress',
objective:
'Build a professional portfolio that goes beyond displaying finished projects by documenting the development process and integrating real activity from GitHub and HvA GitLab.',
accomplishments: [
'Established a Vue 3 and TypeScript application using Vite and Vue Router.',
'Integrated repository browsing for GitHub and the HvA GitLab instance.',
'Developed a dark editorial visual direction for the portfolio.',
'Designed a centralized TypeScript content structure for current projects, work-log entries, and sprint articles.',
'Planned a development journal that supports technical explanations, reflections, and visual documentation.',
],
nextSteps: [
'Populate the development log with detailed entries throughout the semester.',
'Add relevant screenshots and diagrams to document design and implementation decisions.',
'Refine the sprint journal so entries remain easy to navigate as the content grows.',
'Continue testing the GitHub and GitLab integrations and their error handling.',
],
technologies: [
'Vue 3',
'TypeScript',
'Vite',
'Vue Router',
'Tailwind CSS',
'REST APIs',
'Git',
],
updatedAt: '2026-10-13',
repositoryUrl: `${siteConfig.githubUrl}/Portfolio`,
},
{
id: 'ai-fortune-teller',
name: 'AI Fortune Teller',
description:
'An interactive AI concept that uses a fortune-telling experience to explore how an AI system can make assumptions about a visitor from collected information.',
status: 'In Progress',
objective:
'Create an engaging GenAI prototype that demonstrates the relationship between speech interaction, AI-generated responses, personal data, and the risks of profiling.',
accomplishments: [
'Developed the concept of an interactive fortune-telling experience built around a conversational AI.',
'Outlined a possible interaction flow using speech recognition, an LLM persona, and text-to-speech.',
'Explored how a visitor-facing persona could reveal assumptions made by the AI after the conversation.',
'Identified data safety and data misuse as the central ethical concern.',
'Started exploring a printable persona layout for presenting the results of an interaction.',
],
nextSteps: [
'Turn the concept into a working prototype and validate the interaction flow.',
'Determine which speech recognition, language model, and text-to-speech components will be used.',
'Test how the prototype communicates uncertainty and AI-generated assumptions.',
'Document the data collected, the risks involved, and ways to make those risks visible to visitors.',
'Capture screenshots and prototype iterations for the development log.',
],
technologies: [
'Generative AI',
'Large Language Models',
'Speech Recognition',
'Text-to-Speech',
'TypeScript',
],
updatedAt: '2026-10-06',
},
]

export const workLogEntries: WorkLogEntry[] = [
{
id: 'ai-fortune-teller-concept',
date: '2026-09-16',
title: 'Developing the AI Fortune Teller concept',
summary:
'Explored an interactive crystal-ball concept that uses a conversation with AI to demonstrate how assumptions about a visitor can be generated from collected information.',
project: 'AI Fortune Teller',
relatedSprint: 'ai-fortune-teller-sprint-01',
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
id: 'ai-fortune-teller-persona-prototype',
date: '2026-09-22',
title: 'Designing the persona reveal',
summary:
'Explored how the AI Fortune Teller could present its conclusions in a printable persona sheet, turning the end of the conversation into a tangible part of the experience.',
project: 'AI Fortune Teller',
relatedSprint: 'ai-fortune-teller-sprint-01',
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
id: 'ai-fortune-teller-data-safety',
date: '2026-10-06',
title: 'Focusing the ethical analysis on data safety',
summary:
'Narrowed the ethical focus of the AI Fortune Teller to data safety and data misuse, examining the risks created when conversational information is used to generate assumptions about a visitor.',
project: 'AI Fortune Teller',
relatedSprint: 'ai-fortune-teller-sprint-01',
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
]

export const sprintArticles: SprintArticle[] = [
{
slug: 'ai-fortune-teller-sprint-01',
number: 1,
title: 'From an AI Fortune Teller concept to a privacy-focused prototype direction',
startDate: '2026-09-16',
endDate: '2026-10-06',
summary:
'Developed the concept for a conversational AI fortune teller, explored a printable persona reveal, and defined data safety and data misuse as the central ethical focus.',
goal:
'Develop an engaging GenAI concept that demonstrates how conversational input can be used by an AI to produce assumptions about a person, while giving visitors a reason to reflect on data safety and profiling.',
plannedWork: [
'Define the interaction concept and the visitor journey.',
'Explore a technical pipeline for speech input, language-model processing, and spoken responses.',
'Design the persona reveal that follows the conversation.',
'Identify the main ethical concern and connect it to the design.',
],
completedWork: [
'Outlined an interactive fortune-telling concept based on a conversation with an AI.',
'Proposed a pipeline using speech recognition, an LLM persona, and text-to-speech.',
'Explored a printable A4 persona sheet as the output of the interaction.',
'Selected data safety and data misuse as the central ethical focus for further analysis.',
],
postponedWork: [
'Implement and test the complete speech-to-response pipeline.',
'Validate the persona output with users.',
'Verify the final data flow, retention behaviour, and privacy safeguards in a working prototype.',
],
designProcess:
'The concept began with the idea of making an interaction with AI feel familiar and engaging. A fortune teller offers a natural reason for visitors to ask questions and share information. The design then introduces a contrast: the visitor initially experiences the system as entertainment, but the final persona reveals how the AI has interpreted what it heard. A printable A4 layout was explored to make this result tangible. The visual output needs to distinguish information supplied by the visitor from assumptions generated by the model.',
implementationDetails:
'The technical direction separates the interaction into stages: capture the visitor’s speech, convert it into text, send the text to a language model configured with a fortune-teller persona, and turn the response into spoken output. A final generation step could organize the model’s assumptions into a structured persona. This describes the proposed architecture; the complete pipeline and its data handling still need to be validated in a working prototype.',
challenges: [
'Making the interaction engaging without hiding the ethical point of the assignment.',
'Ensuring that generated assumptions are not presented as verified facts about a visitor.',
'Finding a practical output format that makes the result easy to read and discuss.',
],
decisions: [
'Use conversational interaction rather than a traditional form as the main input method.',
'Reveal the AI-generated persona after the interaction so visitors can reflect on the assumptions.',
'Explore a printable A4 sheet as a tangible output of the experience.',
'Focus the ethical analysis on data safety and data misuse rather than treating every AI risk as the primary issue.',
],
lessons: [
'Interaction design can communicate an ethical issue through the experience itself.',
'The distinction between user-provided information and model-generated assumptions needs to be visible.',
'A visual output needs to communicate uncertainty rather than making generated conclusions look authoritative.',
],
improvements: [
'Test the concept with visitors before committing to the final interaction flow.',
'Document the actual data flow and decide what should or should not be retained.',
'Evaluate whether the persona layout clearly distinguishes observations from assumptions.',
],
nextGoals: [
'Develop a functional prototype of the conversation flow.',
'Refine the printable persona design.',
'Use the ethical analysis to guide technical and interaction design decisions.',
],
technologies: [
'Generative AI',
'Large Language Models',
'Speech Recognition',
'Text-to-Speech',
'LLM Prompt Design',
],
relatedLinks: [
{
label: 'GenAI Exposed assignment context',
url: 'https://www.hva.nl/',
},
],
relatedWorkLogIds: [
'ai-fortune-teller-concept',
'ai-fortune-teller-persona-prototype',
'ai-fortune-teller-data-safety',
],
relatedProjectIds: ['ai-fortune-teller'],
},
{
slug: 'portfolio-workspace-sprint-01',
number: 1,
title: 'Establishing the portfolio design and development journal',
startDate: '2026-10-09',
endDate: '2026-10-13',
summary:
'Refined the portfolio’s visual direction and planned a maintainable way to document projects, development decisions, sprint retrospectives, and real repository activity.',
goal:
'Make the portfolio a useful software engineering showcase that communicates both completed work and the process behind it.',
plannedWork: [
'Refine the existing dark editorial design direction.',
'Review the relationship between project descriptions and live repository data.',
'Create a maintainable content structure for the semester development log.',
'Plan how visitors can navigate between projects, journal entries, sprint articles, and commits.',
],
completedWork: [
'Established a clearer dark editorial design direction.',
'Defined separate content collections for current projects, work-log entries, and sprint articles.',
'Expanded the journal concept to include context, approach, implementation, challenges, decisions, results, and reflection.',
'Planned links between journal entries, projects, sprint articles, and repository activity.',
],
postponedWork: [
'Populate the journal with more entries based on ongoing development.',
'Add and verify real screenshots and diagrams.',
'Test the full experience with longer articles and a growing number of work-log entries.',
'Verify all live GitHub and GitLab activity behaviour against the actual APIs.',
],
designProcess:
'The portfolio direction moved away from a generic frontend showcase toward a darker editorial layout. The intention is to make the content feel deliberate and readable while giving projects and development notes enough room to explain their technical substance. The journal was designed as a separate content layer: project summaries describe ongoing work, work-log entries record individual activities, and sprint articles provide a broader retrospective. This distinction should make the site easier to maintain as more content is published.',
implementationDetails:
'The existing Vue 3 and TypeScript application uses centralized arrays for current project data, work-log entries, and sprint articles. Shared TypeScript interfaces describe the expected content, while Vue components control how it is displayed. This approach allows new content to be added without rewriting the page layout. The repository activity feed remains separate because API responses provide evidence of commits, whereas journal entries provide the context and reflection around the work.',
challenges: [
'Keeping the portfolio visually distinctive while ensuring that longer technical articles remain readable.',
'Choosing a content structure that can accommodate both brief updates and detailed sprint retrospectives.',
'Avoiding duplicated information between project pages, the journal, and repository activity.',
'Planning for external API failures and possible access limitations on the self-hosted GitLab instance.',
],
decisions: [
'Preserve Vue 3, TypeScript, and Vite rather than introducing a new frontend framework.',
'Keep journal content separate from the presentation components in centralized TypeScript files.',
'Use manually authored development entries to explain the context that commits cannot provide.',
'Use concise entry previews and expandable content so the journal remains usable as it grows.',
],
lessons: [
'A portfolio becomes more useful when it explains the reasoning behind a project instead of showing only its final appearance.',
'Separating content from presentation makes it easier to maintain and extend the journal.',
'A commit timeline and a development log complement one another but serve different purposes.',
],
improvements: [
'Test the design with a realistic amount of content rather than relying on a small number of entries.',
'Add visual evidence near the explanations it supports.',
'Check that the content schema and article layout remain consistent as new optional fields are introduced.',
],
nextGoals: [
'Finish the collapsible work-log interaction on sprint pages.',
'Add support for images and captions in development entries.',
'Continue documenting project work throughout the semester.',
'Verify the repository integrations and run the project’s quality checks.',
],
technologies: [
'Vue 3',
'TypeScript',
'Vite',
'Vue Router',
'Tailwind CSS',
'GitHub REST API',
'GitLab API',
],
relatedLinks: [
{
label: 'GitHub profile',
url: siteConfig.githubUrl,
},
{
label: 'HvA GitLab profile',
url: 'https://gitlab.fdmci.hva.nl/boschdp',
},
],
relatedWorkLogIds: [
'portfolio-design-direction',
'portfolio-journal-architecture',
'portfolio-journal-and-integrations',
],
relatedProjectIds: ['portfolio-workspace'],
},
]
