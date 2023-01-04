function getQuestions() {
	const CODE_PLACEHOLDER = `##code##`;
	const questions = [];

	let question = new Question(`The VP of sales at Cloud Kicks wants to streamline the lead qualification process to improve the team's productivity and help them reach their target goals. A Business Analys (BA) has been assigned to the project to identify the disconnect between the sales and the marketing teams' definitions of a qualified lead.\n\n What should BA focus on?`);
	questions.push(question);
	question.answers.push(new Answer(`Mapping historical lead data from each team and building charts to highlight similarities`, false));
	question.answers.push(new Answer(`Evaluating the teams' skills and experiences to determine how they can better align`, false));
	question.answers.push(new Answer(`Scheduling an all-day collaboration workshop with both teams to resolve their differencies`, true));

	question = new Question(`The leadership team at universal containers (UC) is focused on customer retention. The business Analyst (BA) has been asked to implement a new customer for life program on the Salesforce Platform. Before they can move forward, they need to understand the lifecycle and all of the related interactions that UC has with its customers.\n\n Which type of session should the BA perform?`);
	questions.push(question);
	question.answers.push(new Answer(`Journey Mapping`, true));
	question.answers.push(new Answer(`User Acceptance testing`));
	question.answers.push(new Answer(`Requirements Gathering`));

	question = new Question(`Universal Containers has planned an initiative to assess its Salesforce org to identify areas of risk and has asked the business analyst (BA) to provide an analysis of its current state. the BA will utilize Salesforce Optimizer for the assessment.\n\n How should the BA use the output from the tool?`);
	questions.push(question);
	question.answers.push(new Answer(`Verify Lightning page loading time`, true));
	question.answers.push(new Answer(`Understand the project scope`));
	question.answers.push(new Answer(`Identify top project priorities`));

	question = new Question(`Universal Containers (UC) has decided to implement salesforce and has assigned a business analyst (BA) to write user stories for the project. The BA planms to meet customers to hear their experiences in their own words.\n\n Which type of research should the BA use to elicit user stories from US's customers?`);
	questions.push(question);
	question.answers.push(new Answer(`Interviewing`, true));
	question.answers.push(new Answer(`Shadowing`));
	question.answers.push(new Answer(`Behavioral`));

	question = new Question(`Support managers at Cloud Kicks have received urgent feedback from staff that record pages are slow to respond and users are growing frustrated.The Business Analyst (BA) has been asked to evaluate the org to determine which pages are being accessed most frequently and which pages are the slowest to load.\n\nWhat is the first step the BA should take to help resolve the issue?`);
	questions.push(question);
	question.answers.push(new Answer(`Confirm steps to reproduce the issue`, true));
	question.answers.push(new Answer(`Update page layout in production`));
	question.answers.push(new Answer(`Create a test plan for each web browser`));

	question = new Question(`A business analyst (BA) conducted a group workshop with stakeholders to understand and document in-scope business processes. The BA feels there are gaps between process steps.\n\n What should BA do to close the gaps or confirm the process steps?`);
	questions.push(question);
	question.answers.push(new Answer(`Using strategyanalisys,define models of how gaps in the business process can be resolved`, true));
	question.answers.push(new Answer(`Conduct elicitation with stakeholders regarding their parts of process`));
	question.answers.push(new Answer(`Review the documentation to ensure that information gathered about the process is correct`));

	question = new Question(`The Business Analyst (BA) at cloud kick has been tasked with optimizing CK's lead process. In the weekly sales meeting, the BA outlines the project and asks for input. A new entry-level employee reaches out multiple times with ideas and suggestions for improvements.\n\n What should BA do where responding to the new employee's input?`);
	questions.push(question);
	question.answers.push(new Answer(`Acknowledge the new employee's ideas while making extra effort to reach out the stakeholders who have more industry experience and knowledge`, true));
	question.answers.push(new Answer(`Send a detailed survey to the entire sales team, including the new employee, to their needs,expectations, and priorities`));
	question.answers.push(new Answer(`Schedule a one-to-one meeting with the new employee to get an alternative perspective from beginner's mind`));

	question = new Question(`Cloud Kicks (CK) wants to redefine its lead-to-customer business process. CK wants to unify the interactions between sales,marketing, and customers to provide a more seamless experience.The BA needs to create a visual representation that includes the steps and inputs from both sales and marketing.\n\n Which tool should the BA use to capture all nuances of the current state?`);
	questions.push(question);
	question.answers.push(new Answer(`Process Mapping`, true));
	question.answers.push(new Answer(`Journey Mapping`));
	question.answers.push(new Answer(`Whiteboarding`));

	question = new Question(`Northern Trail Outfitters is implementing Marketing Cloud. Stakeholders are having a difficult time conceptualizing how Marketing Cloud uses insights to create journeys. The Business analyst (BA) has been asked to show stakeholders how it works so the implementation project can move forward. Timelines are two tight to present a demo, and approval from stakeholders is needed soon in order to keep the project on track.\n\n What should the BA do to help stakeholders visualize how it will work?`);
	questions.push(question);
	question.answers.push(new Answer(`Create a UPN (Universal Process Notation) diagram.`, true));
	question.answers.push(new Answer(`Build a capability model.`));
	question.answers.push(new Answer(`Schedule a storyboarding session.`));

	question = new Question(`Northern Trail Outfitters (NTO) wants to discuss an enhancement to Campaigns with the engineering, marketing, and sales teams. The changes involve detailed integration between systems that will be used by WTO's customers. The business analyst (BA) needs to complete the org impact analysis.\n\n Which reference should the BA consult to understand the integration pattern?`);
	questions.push(question);
	question.answers.push(new Answer(`Solution Architecture Diagram`, true));
	question.answers.push(new Answer(`Salesforce Solution Kits`));
	question.answers.push(new Answer(`Business Requirements Document`));

	question = new Question(`The business analyst is auditing data access by documenting Field-level Security on the Account object in Salesforce.\n\nHow do end users participate as stakeholders in data Governance?`);
	questions.push(question);
	question.answers.push(new Answer(`They provide valuable feedback on how they use data.`, true));
	question.answers.push(new Answer(`They implement their data entry workarounds in the system.`));
	question.answers.push(new Answer(`They export their data back it up locally.`));

	question = new Question(`The development team at Universal Containers is reviewing several stories to be added to the current sprint. The team is having trouble with a particular story about an Opportunity email alert and is unsure about which type of testing is needed.\n\n What should the business analyst review and revise to provide more clarity to the team?`);
	questions.push(question);
	question.answers.push(new Answer(`Acceptance criteria`));
	question.answers.push(new Answer(`User persona`));
	question.answers.push(new Answer(`Definition of done`, true));

	question = new Question(`A business analyst (BA) at Northern Trail Outfitters (NTO) is assigned to a project to help revamp n process. The current process used by the sales team is different than the process outlined in NTO's documentation.\n\n Which step should the BA take first?`);
	questions.push(question);
	question.answers.push(new Answer(`Meet with stakeholders as a group to understand the current state.`, true));
	question.answers.push(new Answer(`Meet with stakeholders as a group to capture future requirements.`));
	question.answers.push(new Answer(`Create an Entity Relationship Diagram (ERD) of the current state.`));

	question = new Question(`Which element of the storytelling process for UX is described here: "A hurdle that makes it difficult for your heroes to succeed on their journeys."`);
	questions.push(question);
	question.answers.push(new Answer(`Challenge`, true));
	question.answers.push(new Answer(`Monster`));
	question.answers.push(new Answer(`Victory`));
	question.answers.push(new Answer(`Helper`));

	question = new Question(`Cloud Kicks (CK) recently decided to transition its business from spreadsheets to a Salesforce solution. CK leaders are excited about the capabilities of Salesforce. Each leader has different ideas about how the platform should be implemented. CK has hired a business analyst (BA) to help define and manage the implementation.\n\n What should the BA do in the first discovery meeting with stakeholders?`);
	questions.push(question);
	question.answers.push(new Answer(`Collaborate with stakeholders to examine and define CK's purpose, customers, metrics, and overall business to inform project direction and vision.`, true));
	question.answers.push(new Answer(`Discuss and document specific pain points in existing processes to inform future project requirements.`));
	question.answers.push(new Answer(`Preview potential Salesforce solutions and collect feedback from stakeholders on each option to inform the direction of the project.`));

	question = new Question(`The business analyst (BA) at Cloud Kicks has been interviewing customer service team members who use Service Cloud to understand the steps they take to complete their daily work. The BA is working on a solution to improve their productivity by identifying each step and documenting its purpose.\n\n Which type of requirement documentation is the BA using in this scenario?`);
	questions.push(question);
	question.answers.push(new Answer(`Process mapping`, true));
	question.answers.push(new Answer(`Value stream mapping`));
	question.answers.push(new Answer(`Data modeling`));

	question = new Question(`The business analysis (BA) at Northern Trail Outfitters is assigned to a project to help revamp its Experience Cloud implementation.\n\n When assessing the existing process, which type of diagram should the BA use to identify waste within and between processes?`);
	questions.push(question);
	question.answers.push(new Answer(`Detailed Process Map`, true));
	question.answers.push(new Answer(`Suppliers, Inputs, Process, Outputs, Customers (SIPOC) Map`));
	question.answers.push(new Answer(`Value Stream Map`));

	question = new Question(`The business analyst (BA) at Universal Containers (UC) wants to understand why UC failed to meet a deployment date for its product go live while following the Agile process. According to the BA's research, the developers lacked a sense of the work in progress and the intended goal of that work, and the QA team was unable to clearly test the functionality based on a given persona.\n\n Which step should the BA take next?`);
	questions.push(question);
	question.answers.push(new Answer(`Review the user stories to ensure they are small, testable, and valuable.`, true));
	question.answers.push(new Answer(`Move the deployment date out so the teams have more time to work.`));
	question.answers.push(new Answer(`Create a SWOT (Strength, Weakness, Opportunity, Threat) analysis to understand why development and testing took more time.`));

	question = new Question(`Universal Containers (UC) needs a Quip template to create Account plans. UC's business analyst has been tasked with documenting requirements for this initiative. During one of the business requirements gathering sessions, a sales manager notes that it's important the new template is user-friendly and only accessible to the account team.\n\n Which option captures this requirement?`);
	questions.push(question);
	question.answers.push(new Answer(`Make the template user-friendly and accessible only by members of the account team.`, true));
	question.answers.push(new Answer(`The sales manager can make the template user-friendly.`));
	question.answers.push(new Answer(`Accessible by members of the account team.`));

	question = new Question(`Universal Containers is planning to implement Commerce Cloud to sell more products. The business analyst working on this project has gathered requirements and is translating them into user stories.\n\n What should the user story focus on?`);
	questions.push(question);
	question.answers.push(new Answer(`Customer experience`, true));
	question.answers.push(new Answer(`Sales margins`));
	question.answers.push(new Answer(`Product functionality`));

	question = new Question(`The sales team recently received training on a new sales methodology. When viewing an Opportunity in Sales Cloud, the sales manager wants the sales cycle to include new stages in addition to multiple custom fields. The business analyst is starting to construct user stories to support the new process.\n\n What should each user story include?`);
	questions.push(question);
	question.answers.push(new Answer(`Who, what, and why`, true));
	question.answers.push(new Answer(`Value, purpose, and need`));
	question.answers.push(new Answer(`Who, where, and how`));

	question = new Question(`Which method should a business analyst use to show current state business flows in Salesforce?`);
	questions.push(question);
	question.answers.push(new Answer(`Entity Relationship Diagramming`));
	question.answers.push(new Answer(`Universal Process Notation`, true));
	question.answers.push(new Answer(`Storyboarding`));

	question = new Question(`The Salesforce development team is strictly following scrum to govern its releases. An executive trying to plan a vacation wants to know when work on the feature will begin so they can be available for additional implementation questions. After consulting with the product owner, the business analyst (BA) learns the team has decided to adopt Kanban instead for all future releases.\n\n What should the BA tell the executive?`);
	questions.push(question);
	question.answers.push(new Answer(`Work will begin when capacity becomes available`, true));
	question.answers.push(new Answer(`Work will begin in the next sprint.`));
	question.answers.push(new Answer(`Work will begin after executive approval is given.`));

	question = new Question(`Up to how many Profiles can a User have?`);
	questions.push(question);
	question.answers.push(new Answer(`Only 1`, true));
	question.answers.push(new Answer(`Up to 3`));
	question.answers.push(new Answer(`The Administrator can have up to 3, normal users only 1.`));
	question.answers.push(new Answer(`As many as required.`));

	question = new Question(`A business analyst has been tasked with leading prototype efforts for a Salesforce project.\n\n What is a prototype?`);
	questions.push(question);
	question.answers.push(new Answer(`A first pass, simple sketch of an idea`, true));
	question.answers.push(new Answer(`A model of a final proposed product`));
	question.answers.push(new Answer(`A polished, proven solution`));

	question = new Question(`The project manager for a new project at Northern Trail Outfitters (NTO) wants the business analyst (BA) to obtain alignment on goals and strategies across NTO's organization, using NTO's documentation, the BA begins to understand NTO's strategies but needs more information.\n\n Which methodology should help the BA obtain the required information?`);
	questions.push(question);
	question.answers.push(new Answer(`V2MOM (Vision. Values, Methods, Obstacles, Measures)`, true));
	question.answers.push(new Answer(`RACI (Responsible, Accountable, Consulted, Informed)`));
	question.answers.push(new Answer(`SMART (Specific, Measurable, Achievable, Relevant, Time-bound)`));

	question = new Question(`The business analyst (BA) on the Salesforce development team at Northern Trail Outfitters is leading a requirements elicitation workshop about the process for onboarding new wholesale partners. While whiteboarding the process, one stakeholder continuously interrupts and points out inefficiencies with invoicing and delivery processes.\n\n What should the BA do to prevent the session from being derailed?`);
	questions.push(question);
	question.answers.push(new Answer(`Add the stakeholder's concerns to a "parking lot" for further discussion.`, true));
	question.answers.push(new Answer(`Ask the stakeholder to focus on the onboarding process.`));
	question.answers.push(new Answer(`Shift the conversation from onboarding to the stakeholder's concerns.`));

	question = new Question(`The scrum team working on Salesforce projects at Northern Trail Outfitters plans to review the current build with stakeholders to gather feedback. The business analyst will facilitate the meeting.\n\n Which type of meeting should be held?`);
	questions.push(question);
	question.answers.push(new Answer(`Sprint review`, true));
	question.answers.push(new Answer(`Daily stand-up`));
	question.answers.push(new Answer(`Retrospective`));

	question = new Question(`A business analyst captures the following acceptance criteria for a user story about case reassignment in Service Cloud.\n- A service manager can dick a Reassign button that changes the owner field of the case.\n- A service manager is able to reassign cases-as part of the mobile experience.\n- Reassignment functionality can be used on cases that have been auto-reassigned.\n- Service reps are unable to reassign cases.\n\n Which mistake was made?`);
	questions.push(question);
	question.answers.push(new Answer(`The criteria include solution information.`, true));
	question.answers.push(new Answer(`The criteria are aligned with the user's goal.`));
	question.answers.push(new Answer(`The criteria are small and testable.`));

	question = new Question(`The finance team is rolling out a new sales process in Sales Cloud for opportunities that are Closed/Won. After meeting with the team, a business analyst (BA) realizes that several requirements for the new process will need further refinement.\n\n What should the BA use to keep track of changes to the process documents?`);
	questions.push(question);
	question.answers.push(new Answer(`Version control`, true));
	question.answers.push(new Answer(`Business backlog`));
	question.answers.push(new Answer(`Communication template`));

	question = new Question(`The business analyst (BA) at Northern Trail Outfitters is writing user stories for a Service Cloud implementation.\n\nIn which order should the BA arrange the three components of a user story?`);
	questions.push(question);
	question.answers.push(new Answer(`I want <xyz>, as a <xyz>, so that <xyz>`));
	question.answers.push(new Answer(`As a <xyz>, I want <xyz>, so that <xyz>`, true));
	question.answers.push(new Answer(`I want <xyz>, so that <xyz> for a <xyz>`));

	question = new Question(`A business analysis (BA) is creating a business flowchart to review with a customer service team that is using service team that is using Service Cloud. The team is organized by the products and the regions they support.\n\n Which step should the BA include e in the business flowchart?`);
	questions.push(question);
	question.answers.push(new Answer(`Capture decision steps and different outcomes.`, true));
	question.answers.push(new Answer(`Illustrate which fields are integrated with an external system.`));
	question.answers.push(new Answer(`Set limits to the scope that will be documented.`));

	question = new Question(`Universal Containers is developing a new case management solution in Salesforce. The business analyst has started writing user stories to capture feature needs. One user story is: The customer care representative wants to take ownership of new cases and communicate with customers so they can provide high-touch customer experiences."\n\n Which component of the user story is "provide high-touch customer experiences?"`);
	questions.push(question);
	question.answers.push(new Answer(`Why`, true));
	question.answers.push(new Answer(`Where`));
	question.answers.push(new Answer(`Assumption`));

	question = new Question(`Northern Trail Outfitters (NTO) has noticed that many customers are posting to social media about issues they are having with a new product. The services team is looking for easy ways to engage with these customers and resolve their complaints. During the first discovery meeting of the project, the business analyst (BA) hears that the VP of services and support wants to implement Omni-Channel for NTO's Service Cloud.\n\n What should the BA do first to ensure the ongoing success of the project?`);
	questions.push(question);
	question.answers.push(new Answer(`Produce a gap analysis document that will show the ways the requested solution can solve the limitations of NTO's current system.`, true));
	question.answers.push(new Answer(`Encourage the project stakeholders to think of various ways to solve cases different before deciding on a specific solution.`));
	question.answers.push(new Answer(`Configure a proof-of-concept demo within a sandbox environment to show the pros and cons of the requested solution.`));

	question = new Question(`The Business analyst (BA) at Northern Outfitters (NTO) has gathered preliminary functional requirements for an upcoming Salesforce implementation project. Before translating these requirements into user stories, the BA wants to gain additional perspective, feedback, and detail on the requirements from the NTO team.\n\n Which document should help the BA gather this information?`);
	questions.push(question);
	question.answers.push(new Answer(`Stakeholder analysis`, true));
	question.answers.push(new Answer(`Business analysis plan`));
	question.answers.push(new Answer(`Current state analyst`));

	question = new Question(`The business analyst (BA) at Universal Containers has met with stakeholders and is using the waterfall methodology to capture requirements for Sales Cloud enhancements for a future product release.\n\n What is the next step for the BA to take before build can begin?`);
	questions.push(question);
	question.answers.push(new Answer(`Get approval and signoff on the requirements.`, true));
	question.answers.push(new Answer(`Schedule sprint planning meetings.`));
	question.answers.push(new Answer(`Define the minimal viable product.`));

	question = new Question(`A business analyst (BA) is working on a request from a sales leader at Universal Containers. The sales leader has noticed the quality of information on new leads has declined recently. After completing their initial research, the BA concludes that the Salesforce lead intake form needs to be updated to include only essential information. Since several sales teams use the intake form, the BA must get alignment from all of the groups.\n\n How does whiteboarding help the BA collaborate with multiple stakeholders?`);
	questions.push(question);
	question.answers.push(new Answer(`It builds a shared understanding of the current state, creates a space for everyone to contribute since the activity feels shared, and guides the conversation while maintaining engagement.`, true));
	question.answers.push(new Answer(`It provides a script to follow with suggested questions and prompts, identifies exactly what each group needs in order to be successful, and the final version acts as the business requirements document.`));
	question.answers.push(new Answer(`It provides a single document in a central location for stakeholders to contribute, allowing each group to provide feedback on their own, instead of requiring everyone to meet and discuss together.`));

	question = new Question(`What are the business analyst's responsabilities during the analyze phase of the Salesforce implementation lifecycle?`);
	questions.push(question);
	question.answers.push(new Answer(`Complete testing, build training materials, and elicit requirements for the next iteration`, true));
	question.answers.push(new Answer(`Create a data dictionary, write end user documentation, and review test scripts`));
	question.answers.push(new Answer(`Gather business requirements, create process maps, and write user stories`, true));

	question = new Question(`Northern Trail Outfitters (NTO) has acquired a competitor. The agreement is to migrate the acquirent company into NTO's Technoogical Platforms. One of its challenges is to offer a unified customer experience while strengthening the relationship with its customers. The business analyst(BA) has been asked to translate the business objectives and assemble an improved and standard customer experience.\n\nWhich strategy should the BA use to accomplish the goal?`);
	questions.push(question);
	question.answers.push(new Answer('Understand business objectives, define the intention and audience, conduct user experience'));
	question.answers.push(new Answer('Understand business objectives, define the intention and audience, lead a journey mapping workshop, find opportunities for improvement, and update the journey map', true));
	question.answers.push(new Answer('Understand business objectives, determine company culture, evaluate processes and user experiences, interview stakeholders, and add improvements to the integration roadmap'));

	question = new Question(`A BA is compiling a list of subject matter experts to consult throughout the discovery process for a new Service Cloud implemention.\n\nWhat is the primary value of the BA speaking with customer service reps?`);
	questions.push(question);
	question.answers.push(new Answer(`Validating current processes`, true));
	question.answers.push(new Answer(`Estimating the project cost`));
	question.answers.push(new Answer(`Building solution design consensus`));

	question = new Question(`Cloud Kiks wants to assess the efficiency of its Sales Cloud solution to eliminate unnecessary steps and cut costs. A BA will give a presentation ton executives to help them understand the current state and define the future state.\n\nWich document should the BA use for the presentation?`);
	questions.push(question);
	question.answers.push(new Answer(`A business process model`, true));
	question.answers.push(new Answer(`A persona journey map`));
	question.answers.push(new Answer(`A collection of use cases`));

	question = new Question(`Northern Trail Outfitters is starting a project to implement Service Cloud for the customer service department.\n\nWhich activity should be handled by a business analyst assigned to this project?`);
	questions.push(question);
	question.answers.push(new Answer(`Work with Salesforce to purchase the necessary licenses`));
	question.answers.push(new Answer(`Manage existing Salesforce applications and activities`));
	question.answers.push(new Answer(`Understand current business processes and document existing functionality`, true ));

	question = new Question(`A new BA wants to follow the correct order of phases in the implementation lifecycle on a Salesforce project.\n\nHow should the BA  approach the project?`);
	questions.push(question);
	question.answers.push(new Answer(`Analyze, build, operate, deliver`));
	question.answers.push(new Answer(`Analyze, build, deliver, operate`, true));
	question.answers.push(new Answer(`Analyze, operate, build, deliver`));

	question = new Question(`A BA is unsing storytelling to communicate the vision for a Salesforce solution to business stakeholders.\n\nWhich storytelling technique sould the BA use in their initial demo of a solution to business stakeholders?`);
	questions.push(question);
	question.answers.push(new Answer(`Highlight a perspective from testing feedback that identifies bugs and pain points in thei business challenges`));
	question.answers.push(new Answer(`Give a perspective form a relatable persona that shows the development team can solve their business challenges`, true));
	question.answers.push(new Answer(`Describe a perspective from the business requirements document that addresses architectural concerns based on their business challenges`));

	question = new Question(`Nothern Trail Outfitters (NTO) plans to significantly grow its workforce and wants to increase the overall security of its Sales Cloud instance. NTO has previously implemented a complex security solution with organization-wide defaults, criteria-based sharing rules, and dozens of user profiles. NTO has asked a BA for recommendations on how to proced.\n\nWhich aspect of a potential solution is most important for a BA to consider?`);
	questions.push(question);
	question.answers.push(new Answer(`User adoption`, true));
	question.answers.push(new Answer(`Scalability`));
	question.answers.push(new Answer(`System downtime`));

	question = new Question(`Cloud Kicks(CK) has expressed concerns about the distribution process for a new line of shoes, because the company consistently misses its targets delivery dates. CK asks the BA to uncover the issue and propose a business solution.\n\nWhat should the BA do next?`);
	questions.push(question);
	question.answers.push(new Answer(`Review future state distribution processes for CK`));
	question.answers.push(new Answer(`Explore how retsilers similiare to CK hanlde distribution`));
	question.answers.push(new Answer(`Shadow an operations team member at the distribution facility`, true));

	question = new Question(`NTO has moved its inventory systms to Salesforce to track the clothing it manufactures and sells. As a part of this project, NTO wants to implement several features which wull also improve how its inventory is restocked. In order to manage the discovery phase of the project, the project team plans to hire a business analyst.\n\nWhat should a BA do to be successful during the first phase of the project?`);
	questions.push(question);
	question.answers.push(new Answer(`Architect a solution, configure a sandbox, and build a proof of concepts`));
	question.answers.push(new Answer(`Elicit requirements , buld automation, and deploy a solution`));
	question.answers.push(new Answer(`Elicit requirements, create flows and process diagrams, and understand business analytics`, true));
	
	question = new Question(`At CK, the marketing director's management style is result-driven. CK uses scrum methodologiy when developing improvements to its Salesforce org. The director requests urgent enhancements in the middle of a sprint that require changes by development team. The director believes their needs are od rhw highest importance.\n\nWhat should the BA do when disruptions to the project occur?`);
	questions.push(question);
	question.answers.push(new Answer(`Focus on the agreed upon deliverables instead of the new requests to prevent overallocation of resources`));
	question.answers.push(new Answer(`Ask the project manager for an additional resource to implement the new requests`));
	question.answers.push(new Answer(`Interpret the requests as guidelines to be used when determing priorities for the upcoming release`, true));

	question = new Question(`Universal Container just rolled out a new sales methodology and process. A month after the initial training manager has notices some reps have a large number of overdue tasks. The manager is unsure if it's a learning cure or a system issue and has asked the BA to determin the cause and reccomend a solution.\n\nWhich method should the BA use to start collecting data?`);
	questions.push(question);
	question.answers.push(new Answer(`Brainstorming and prototyping`));
	question.answers.push(new Answer(`Observation adn interviewing`));
	question.answers.push(new Answer(`Focus groups and workshops`, true));

	question = new Question(`The service Center at UC uses Service Cloud and Experience Cloud to manage its customer case lifecycle. UC wants to limit the number of interactions a customer has during the lifecycle. The project leader has asked the BA to visually illustrate the lifecycle.\n\nWhich document should the BA create?`);
	questions.push(question);
	question.answers.push(new Answer(`Journey Map`, true));
	question.answers.push(new Answer(`Heat Map`));
	question.answers.push(new Answer(`Process Map`));

	question = new Question(`CK has invited stakeholders from multiple departments and roles to participate in its latest Slaesforce project. Each stakeholder's experiences and priorities for the project are different which causes tension within the team and a lack of clarity around project direction.\n\nWhat should the BA do to help the team work together more effectively?`);
	questions.push(question);
	question.answers.push(new Answer(`Encourage leadership to share their version for the project, and ask the larger team to focus its feedback only on the key objectives, pain points, and requirements outlined by leaders`));
	question.answers.push(new Answer(`Limit participation in key project discovery, requirements, and solutioning metings to leadership, ande engage the larger team to answer question directly related to thi roles when needed`));
	question.answers.push(new Answer(`Lead the stakeholders in creating a team agreement that assigns project roles and outlines how the tam will collaborate, disagree, develp trust, and define success`, true));

	question = new Question(`As part of the digital transformation at Cloud Kicks, company leaders have decided to adopt Service Cloud as its CRM platform for customer service and support.Executive directors are supportive of the initiative, but end users are unconvinced and prefer to remain on the current platform.\n\nWhat should the business analyst do to gain the end users' cooperation?`);
	questions.push(question);
	question.answers.push(new Answer(`Respond to end users with empathy and accommodate their needs; translate the end users' needs into technical requirements; and deliver the project to the developers to implement the solution`));
	question.answers.push(new Answer(`Use an assertive influencing style; demonstrate authority and expertise; outline the project objectives; and make sure end users know that the decision hasbeen made and the time to make changes has passed`));
	question.answers.push(new Answer(`Identify key stakeholders and develop relationships with them as a trusted advisor; involve stakeholders and end users in the design of the new solution; and act as a liasion between business and technical teams.`, true));

	question = new Question(`Universal Containers (UC) uses a Salesforce org. UC is merging with a sister company that uses a different CRM. The incoming sales team is reluctant to change to a different process. The business analyst (BA) has been asked to help reach consensus and drive adoption.\n\nWhich group is well positioned to help the BA secure alignment for the initiative?`);
	questions.push(question);
	question.answers.push(new Answer(`System admin and project manager`, true));
	question.answers.push(new Answer(`Power users and top sales earners`));
	question.answers.push(new Answer(`Executive sponsors and sales leadership`));

	question = new Question(`A business analyst (BA) at Northeren Trail Outfitters has been asked to explain a sales process improvement idea and collaborate on a plan for implementation.Several sale users in various locations have been identified to participate.\n\nWhich technique should the BA use to optimize effectiveness and build a shared understanding of the idea and approach?`);
	questions.push(question);
	question.answers.push(new Answer(`Demo prototype`));
	question.answers.push(new Answer(`Virtual whiteboard`, true));
	question.answers.push(new Answer(`One-on-one meetings`));

	question = new Question(`Universal Containers (UC) is working with an implementation partner to help it optimize Salesforce. A new BA from the partner was introduced to UC stakeholders a few weeks into the project. The BA is getting to know each of the stakeholders by their roles and contributions. However, the BA had one misstep and is sfightly embarassed.\n\nWhat should the BA do to build trust with the stakeholders?`);
	questions.push(question);
	question.answers.push(new Answer(`Be vulnerable and own their mistake`, true));
	question.answers.push(new Answer(`Promise to work harder to avoid other mistakes`));
	question.answers.push(new Answer(`Ask their supervisor for help immediately`));

	question = new Question(`Universal Containers wants the ability to fill out a survey based on customer feedback. The team is unable to visualize a possible solution in order to confirm therequirements.\n\nWhich elicitation technique should the business analyst use to help the team meet its goal?`);
	questions.push(question);
	question.answers.push(new Answer(`Prototyping`, true));
	question.answers.push(new Answer(`Brainstorming`));
	question.answers.push(new Answer(`Observation`));

	question = new Question(`cloud kicks (CK) wants to enhance the user experience for customer service agents on Service Cloud so they can effectively meet their service-level agreements. CK has a vision for the future state, but needs to understand how to achieve it. A BA has been assigned to hlp with this goal.\n\nWhich type of documents should the BA use to meet the requirements?`);
	questions.push(question);
	question.answers.push(new Answer(`Change management`));
	question.answers.push(new Answer(`Use case`, true));
	question.answers.push(new Answer(`Gap analysis`));

	question = new Question(`The Salesforce team at Cloud Kicks (CK) is reviewing the sales team's business processes. During a review session, the business analyst notices that quantifiable benchmarks have yet to be established.\n\nWhy is it a best practice to establish benchmarks to evaluate existing processes?`);
	questions.push(question);
	question.answers.push(new Answer(`Proves processes are out of date ad require a new solution`));
	question.answers.push(new Answer(`Compares processes against CK's closest competitors`, true));
	question.answers.push(new Answer(`Shows tangible impact from changes to processes`));

	question = new Question(`The business analyst (BA) at Northern Trail Outfitters recently configured a feature on Opportunities for the sales team. The BA plans to gather feedback from a small group of end users before rolling out the feature to the entire company.\n\nWhat should the BA do to present this information? `);
	questions.push(question);
	question.answers.push(new Answer(`Share user stories about the feature. `));
	question.answers.push(new Answer(`Demo the new feature.`, true));
	question.answers.push(new Answer(`Create a feature manual.`));

	question = new Question(`Cloud Kicks (CK) wants its sales team to use Sales Cloud to decrease its lead conversion time. The business analyst (BA) will analyze and break down CK'stypical sales cycle.\n\nHow can process mapping help the BA get started on this project?`);
	questions.push(question);
	question.answers.push(new Answer(`It can show the relationship between the steps and actions in the sales cycle to communicate and understand the current state, and to identify areas forimprovemen`, true));
	question.answers.push(new Answer(`It can model changes in the current customer experience, analyze each change's potential for impact, and help visualize potential improvements in the salescycle in advance of the solution design`));
	question.answers.push(new Answer(` It can display complex ideas in a consistent format, highlight blockers and impediments to help stakeholders quickly assess issues in the sales cycle, and seethe project timeline at a glance.`));

	question = new Question(`Universal Containers has kicked off a project focused on transforming its customer service department using Service Cloud. During onboarding, the project manager shared the following process maps with the business analyst (BA):\n*Case Creation\n* Case Triage\n* Case Assignment\n* Case Management\n* Case Closure\n\nWhich key attributes should the BA look for when reviewing the process maps?`);
	questions.push(question);
	question.answers.push(new Answer(`Cost, timeline, risks, requirements, and opportunities`));
	question.answers.push(new Answer(`Case sources, types, volumes, priorities, and reasons`, true));
	question.answers.push(new Answer(`Audiences, scope, inputs, outputs, and resources`));

	question = new Question(`A business analyst (BA) is working with stakeholders at Universal Containers to walk through a potential solution for the lead routing and qualification process. The solution will include automated and manual features.\n\nWhich artifact should help the BA illustrate the vision of a solution to stakeholders?`);
	questions.push(question);
	question.answers.push(new Answer(`Detailed user stories with technical documentation about the existing process`, true));
	question.answers.push(new Answer(`Annotated process flows with modifications to an existing process`));
	question.answers.push(new Answer(`Collected pain points from people who follow the existing process`));

	question = new Question(`The business analyst (BA) at Cloud Kicks has been asked to map the current sales process in Sales Cloud to document legal compliance with local privacy regulations, which can differ based on the state or country of a data transaction.\n\nWhich activity would be most effective in helping the BA understand the sales process?`);
	questions.push(question);
	question.answers.push(new Answer(`Using live workshops to map out the sales process`, true));
	question.answers.push(new Answer(`Asking stakeholders to complete a questionnaire`));
	question.answers.push(new Answer(`Conducting individiual interviews with stakeholders`));

	question = new Question(`A business analyst (BA) at Universal Containers has been assigned to a Salesforce project that will have an impact on more than 5,000 office locations across the globe. The BA needs to identify the people who can describe the business problem and provide detailed requirements.\n\nWhich document should the BA use?`);
	questions.push(question);
	question.answers.push(new Answer(`RACI chart`, true));
	question.answers.push(new Answer(`User stories`));
	question.answers.push(new Answer(`Stakeholder analysis`));

	question = new Question(`A business analyst (BA) is working with the support team at Cloud Kicks (CK) on a Service Cloud implementation. The BA has decided to create a process map to understand CK's current merchandise return process.\n\nWhat are the top three benefits of creating a process map?`);
	questions.push(question);
	question.answers.push(new Answer(`Engages stakeholders, identifies improvements, and starts the change process`));
	question.answers.push(new Answer(`Builds accountability, increases revenue, and decreases overall time spent on requirements`));
	question.answers.push(new Answer(`Identifies improvements, decreases project costs, and starts the change process`, true));

	question = new Question(`The business analyst (BA) implementing Salesforce at Cloud Kicks is interacting with many different people throughout the company. Some of the subject matter experts (SMEs) are difficult to engage, and the BA is struggling to get the information they need.\n\nWhat should the BA do when they find it difficult to get a response?`);
	questions.push(question);
	question.answers.push(new Answer(`Put extra effort into following up with the SMEs.`));
	question.answers.push(new Answer(`Limit effort to contact the unresponsive SMEs.`));
	question.answers.push(new Answer(`Escalate the concern to the SMEs' manager.`, true));

	question = new Question(`A business analyst (BA) at Universal Containers (UC) has been asked to evaluate a business process at a high level and in detail, while also keeping regulatory considerations in mind. Management wants to use the output from the BA's evaluation to inform decisions about UC's future implementations of Sales Cloud and Service Cloud.\n\nWhat should the BA use for their evaluation?`);
	questions.push(question);
	question.answers.push(new Answer(`Cross-functional flowchart`));
	question.answers.push(new Answer(`Entity Relationship Diagram (ERD)`));
	question.answers.push(new Answer(`Universal Process Notation (UPN)`, true));

	question = new Question(`Universal Containers has asked a business analyst (BA) to create a process map indicating how it is using Marketing Cloud to manage its campaigns. In a process map that uses Universal Process Notation (UPN), the BA has marked each activity box with a resource.\n\nWhat does an activity box marked "C Customer' mean?`);
	questions.push(question);
	question.answers.push(new Answer(`The customer should be responsible.`));
	question.answers.push(new Answer(`The customer should be informed.`));
	question.answers.push(new Answer(`The customer should be consulted.`, true));

	question = new Question(`Universal Containers (UC) has chosen to implement Sales Cloud and Service Cloud to increase revenue and remove bottlenecks in its current processes. A business analyst (BA) is tasked with diagramming business processes.\n\nWhat should the BA do to successfully meet governance requirements to identify the business purpose?`);
	questions.push(question);
	question.answers.push(new Answer(`Use UC's existing terminology.`));
	question.answers.push(new Answer(`Adhere to agreed upon mapping standards.`, true));
	question.answers.push(new Answer(`Identify resources engaged in each step.`));

	question = new Question(`The business analyst (BA) at Northern Trail Outfitters needs to create a current state process map for a Service Cloud implementation with its retail division. The BA needs a simple diagramming notation for the process map that is applicable across all industries, provides context for metrics and management decisions, and supports regulatory considerations.\n\nWhich diagramming notation should the BA use for the process map?`);
	questions.push(question);
	question.answers.push(new Answer(`Business Process Modeling Notation (BPMN)`));
	question.answers.push(new Answer(`Universal Process Notation (UPN)`, true));
	question.answers.push(new Answer(`Unified Modeling Language (UML)`));

	question = new Question(`At the start of a new Agile development project, the Universal Containers’ product owner asked the business analyst (BA) to clearly define the intended results of the work based on stakeholder needs. The development and implementation teams will use the intended results to plan product decisions. The definition should avoid assumptions and focus on stakeholder value.\n\nWhich element should the BA choose to define the intended results?`);
	questions.push(question);
	question.answers.push(new Answer(`Requirements`));
	question.answers.push(new Answer(`User stories`,true));
	question.answers.push(new Answer(`Epics`));

	question = new Question(`Universal Containers recently kicked off a project to build an Experience Cloud solution for partners. Partners need to upload their monthly sales reports to this account portal.\n\nWhich option should the business analyst use as the functional requirement specification?`);
	questions.push(question);
	question.answers.push(new Answer(`Partners need to submit monthly sales reports.`));
	question.answers.push(new Answer(`The portal should allow for partners to upload monthly sales reports.`, true));
	question.answers.push(new Answer(`The portal should allow for partners to access monthly sales reports.`));

	question = new Question(`While working on a new Sales Cloud feature request for the sales team at Northern Trail Outfitters,the business analyst (BA) uncovers a workflow which could have an impact on the service team. Thesales director assures the BA that the impact to service would be minimal.\n\nWhich step should the BA take next?`);
	questions.push(question);
	question.answers.push(new Answer(`Review the effort and impacts with the service team, and work to align requirements across the teams.`, true));
	question.answers.push(new Answer(`Continue with the effort as defined by sales and add a backlog item to review the service impacts in the future.`));
	question.answers.push(new Answer(`Prioritize the effort as defined by sales and ask the director to review any service impacts.`));

	question = new Question(`The North American (NA) sales team wants to add a set of new fields and delete several fields fromthe Account object. During requirements gathering, the business analyst (BA) discovers the fields areactively being used by the EMEA team.\n\nWhich step should the BA take next?`);
	questions.push(question);
	question.answers.push(new Answer(`Refine the requirements to accommodate, both teams.`, true));
	question.answers.push(new Answer(`Focus on the NA team's requirements.`));
	question.answers.push(new Answer(`Start another project to address the EMEA team's requirements`));

	question = new Question(`Universal Containers wants to integrate its Salesforce org with the largest online professional network so its sales reps can view information directly on Salesforce records. The business analyst will write acceptance criteria for this scenario.\n\nWhat is an example of good acceptance criteria?`);
	questions.push(question);
	question.answers.push(new Answer(`Install a CRM widget to allow sales reps to view information in the Lead and Contact records.`, true));
	question.answers.push(new Answer(`A sales rep can view current information directly in the Lead and Contact records.`));
	question.answers.push(new Answer(`A sales rep needs to have the CRM widget installed in the Lead and Contact Record Page Layout.`));

	question = new Question(`Universal Containers is setting up a Salesforce email integration for the sales team. Through discovery conversations, the business analyst (BA) learns the operations team also needs email integration in the near future.\n\nWhat should the BA do next?`);
	questions.push(question);
	question.answers.push(new Answer(`Include the operations team during discovery.`));
	question.answers.push(new Answer(`Proceed with the sales team's project as planned.`, true));
	question.answers.push(new Answer(`Start project work for the operations team.`));

	question = new Question(`Universal Containers is about to kick off a new Salesforce implementation, bringing both sales and service teams onto the platform. Each team has been managing Accounts and Contacts in their own way even though the Accounts and Contacts are shared between the teams. This has resulted in disagreements about what should be built in Salesforce.\n\nWhich groups should the business analyst work with to gain full alignment on a common program vision and strategy?`);
	questions.push(question);
	question.answers.push(new Answer(`Business leaders, middle management, and end users`, true));
	question.answers.push(new Answer(`Senior leadership, IT leadership, and middle management`));
	question.answers.push(new Answer(`Executive sponsors, IT leadership, and end users`));

	question = new Question(`The Salesforce development team is strictly following scrum to govern its releases. An executive trying to plan a vacation wants to know when work on the feature will begin so they can be available for additional implementation questions. After consulting with the product owner, the business analyst (BA) learns the team has decided to adopt Kanban instead for all future releases.\n\nWhat should the BA tell the executive?`);
	questions.push(question);
	question.answers.push(new Answer(`Work will begin after executive approval is given`));
	question.answers.push(new Answer(`Work will begin in the next sprint.`));
	question.answers.push(new Answer(`Work will begin when capacity becomes available`, true));

	question = new Question(`Cloud Kicks has moved into the quality assurance (QA) phase of Salesforce product configuration and extension. The QA team is now trying to confirm it has delivered value to stakeholders based on business requirements. The team is asking questions such as,"Did we build the right product?'' and "Did we build the product right?"\n\nWhich element should the business analyst use to help the QA team validate that the product fulfilled the requirements without ambiguity?`);
	questions.push(question);
	question.answers.push(new Answer(`Process maps`));
	question.answers.push(new Answer(`User stories`));
	question.answers.push(new Answer(`Acceptance criteria`, true));

	question = new Question(`Northern Trail Outfitters (NTO) is undergoing a Salesforce implementation for Service Cloud. The busjpess analyst is currency working with the development team as they build features in the sandbox. NTO wants to test these features before the changes are deployed to the production environment.\n\nAs part of the Application lifecycle Management (ALM) process, which three development models does Salesforce support?`);
	questions.push(question);
	question.answers.push(new Answer(`Rapid Application Development, Org Development Package Development`));
	question.answers.push(new Answer(`Change Set Development, Org Development, Package Development`, true));
	question.answers.push(new Answer(`Salesforce DX, Flow Builder, Rapid Application Development`));

	question = new Question(`The business analyst (BA) at Northern Trail Outfitters is writing user stories about a Case creation feature within Service Cloud for an upcoming sprint. This feature overlaps with another feature that is being developed in the current sprint. The BA is working with the technical team to identify metadata dependencies across features to prevent overwriting before the release.\n\nWhat should the BA use?`);
	questions.push(question);
	question.answers.push(new Answer(`Setup Audit Trail`));
	question.answers.push(new Answer(`Change sets`));
	question.answers.push(new Answer(`Version Control`, true));

	question = new Question(`A business analyst (BA) at Northern Trail Outfitters was asked to create a new user story for a Sales Cloud update requested by the inside sales team. The BA created the following story:"As a user, I need visibility to customers' purchase history details so I can increase efficiencies and improve closure rates by better tailoring sales offerings." \n\nWhich mistake did the BA make when creating this story?`);
	questions.push(question);
	question.answers.push(new Answer(`The goal is undefined.`));
	question.answers.push(new Answer(`The persona is undefined`, true));
	question.answers.push(new Answer(`The need is undefined`));

	question = new Question(`A business analyst (BA) at Northern Trail Outfitters has been asked to prepare documentation including acceptance criteria and definition of done for a Heroku project.\n\nWhich way should the BA approach creation of this documentation?`);
	questions.push(question);
	question.answers.push(new Answer(`Include the personal perspective for acceptance criteria and the overall perspective for definition of done.`, true));
	question.answers.push(new Answer(`Create one consolidated set of documentation as the two terms are synonymous and used interchangeably.`));
	question.answers.push(new Answer(`Include the overall perspective for acceptance criteria and the persona's perspective for definition of done.`));

	question = new Question(`Northern Trail Outfitters (NTO) has completed a project with a third-party event organization platform to enhance its MVP Experience Site. Many features were left in the project backlog. NTO's IT team is beginning a new phase of work on the Experience Site to build additional features requested by business stakeholders and wants to include the items that were left in the backlog in the first phase.\n\nHow should the business analyst coordinate the user stories to most efficiently manage the new project timeline?`);
	questions.push(question);
	question.answers.push(new Answer(`Include existing and new user stories to be completed within the duration of the project. Hire additional developers to accommodate both work streams to prevent delays within the schedule sprints.`));
	question.answers.push(new Answer(`Reprioritize existing and new user storks to place the stories into each sprint of the project. Return an equivalent: amount of lower priority work to the project backlog,`, true));
	question.answers.push(new Answer(`Prioritize user stories for the new enhancements for the initial sprints of the project to accommodate business stakeholder requests. Complete existing user stories in the final sprint of the project.`));

	question = new Question(`The business analyst at Cloud Kicks is using a checklist to assess the quality of user stories for an upcoming Experience Cloud implementation.\n\nWhich characteristics make a user story successfull?`);
	questions.push(question);
	question.answers.push(new Answer(`Clean Direct, Concise, Cross Functional, Configurable`));
	question.answers.push(new Answer(`Actionable., Concise, Testable, Solution-oriented, Defined`));
	question.answers.push(new Answer(`Independent, Negotiable, Valuable, Estimable, Small, Testable`, true));

	question = new Question(`The business analyst is working with a stakeholder on a Salesforce project. The stakeholder needs an approval process on contract submissions. Sales managers want to see all contracts when the discount is greater than 20%. They will decline any contracts with a discount that is greater than 25%, but they want visibility into other highly discounted contracts.\n\nWhich acceptance criteria is the most effective for this scenario?`);
	questions.push(question);
	question.answers.push(new Answer(`A sales manager wants to be notified when a contract has been submitted with a discount greater than 20% so the manager can approve or decline a discounted price.`, true));
	question.answers.push(new Answer(`Users in a sales manager role should have access to a button on contracts to click to approve or decline a contract with a discounted price of 25% or more.	`));
	question.answers.push(new Answer(`A sales manager wants to be able to approve contracts with a large discount and they need a validation rule related to contract discounts greater than 25%`));

	question = new Question(`The business analyst at Universal Containers is helping the team transition from workflow rules to flows. The work has been built and it is time to kick off user acceptance testing (UAT).\n\nWhat is the goal of UAT?`);
	questions.push(question);
	question.answers.push(new Answer(`To ensure what was originally requested is being delivered`, true ));
	question.answers.push(new Answer(`summarize the overall ask and determine what is in scope`));
	question.answers.push(new Answer(`To identify acceptance criteria with pass/fail indicators`));

	question = new Question(`Northern Trail Outfitters is Updating Its customer portal built on Experience Cloud. The team has drafted a user story:"As a customer, I want to be able to chat with a support agent and view my account, see my orders, and ask questions via the customer port.\n\nWhat should a business analyst do to improve this user story?`);
	questions.push(question);
	question.answers.push(new Answer(`Estimate how long it will take the technical team to complete the story.`));
	question.answers.push(new Answer(`Include specific information about potential Salesforce solutions.`));
	question.answers.push(new Answer(`Adjust the goal of the user story to be independent.`, true));

	question = new Question(`The Salesforce project team at Cloud Kicks is about to start a project that crosses sales and service teams. The business analyst (BA) has been tasked with writing user stories with the teams in a workshop.\n\nWhat should the BA keep in mind during the process?`);
	questions.push(question);
	question.answers.push(new Answer(`User stories encourage iterative development.`));
	question.answers.push(new Answer(`User stories specify which technical components are impacted.`, true));
	question.answers.push(new Answer(`User stories are fixed upon stakeholder approval.`));

	question = new Question(`During a sprint grooming session for the Sales Cloud implementation at Cloud Kicks, the development team mentions the step "Code Review by Technical Architect" listed within the acceptance criteria needs to be adjusted.\n\nWhich location should the business analyst move this item to?`);
	questions.push(question);
	question.answers.push(new Answer(`Project plan`, true));
	question.answers.push(new Answer(`Definition of done`));
	question.answers.push(new Answer(`Pull request template`));

	question = new Question(`The business analyst (BA) at Universal Containers has been capturing the requirements for a major Sales Cloud release. An admin has been deploying the resulting system changes. The quality assurance (QA) team has run into challenges when testing the changes. The BA is unaware of deployment and testing challenges.\n\nWhat should the BA do to resolve these challenges with the release team?`);
	questions.push(question);
	question.answers.push(new Answer(`Associate each set of metadata -changes to the corresponding user story.`));
	question.answers.push(new Answer(`Provide detailed test cases to validate the functional requirements`, true));
	question.answers.push(new Answer(`Involve the stakeholders in the business requirements gathering sessions.`));

	question = new Question(`A group of business analysts (BA) at Universal Containers have been working with different teams of stakeholders on eliciting requirements for a new Salesforce app. The BAs have gathered and documented all of the information in a central location. Upon review of the requirements, the BAs discovered that changes made to the documentation were overwritten by each other, and they will lose time recapturing them.\n\nWhat should the BAs do differently to prevent this error from happening?`);
	questions.push(question);
	question.answers.push(new Answer(`Each BA should use their own separate documentation,`));
	question.answers.push(new Answer(`Each BA should enter their business needs in a shared spreadsheet,`));
	question.answers.push(new Answer(`Each BA should use a shared system that has version control.`, true));

	question = new Question(`Universal Containers is currently doing user acceptance testing for a global customer service project that leverages Service Cloud. A stakeholder is executing a test case for a specific user story. The stakeholder has provided this feedback:\n* The functionality described in the test case is working as expected.\n* The stakeholder wants to change the label of several fields described in the test case.\n* The stakeholder wants to add two new fields that were excluded from the test case.\n\nWhich step should the business analyst take next?`);
	questions.push(question);
	question.answers.push(new Answer(`Acknowledge the feedback, update the existing user story to include the field changes, and assign the user story back to the technical team for immediate development`));
	question.answers.push(new Answer(`Acknowledge the feedback, create a new test case that includes the field changes, and assign the test case back to the stakeholder for immediate testing `));
	question.answers.push(new Answer(`Acknowledge the feedback, create a new user story that includes the field changes, and ask the stakeholder to update the existing test case to show it was successfully tested`, true));

	question = new Question(`A  business analyst (BA) at Northern Trail Outfitters is preparing for a user acceptance testing (UAT) session for a global Sales Cloud project.\n\nWhat should the BA do to engage the business most effectively during UAT"?`);
	questions.push(question);
	question.answers.push(new Answer(`Hand off ownership for writing, reviewing, and executing UAT scenarions, providing feedback, and approval for release to business stakeholders`));
	question.answers.push(new Answer(`Work with quality assurance analysis to collaborate in writing, reviewing and exectuing UAT scenarios, with business stakeholders to collaborate in writing, reviewing and executing UAT scenarios, providing feedback, and approval for release`));
	question.answers.push(new Answer(`Work with business stakeholders to collaborate in writing, reviewing, and executing UAT scenarios, providing feedback, and approval for release`, true));

	question = new Question(`The business analyst (BA) is preparing for user acceptance testing (UAT) for Northern Trail Outfitters' new Service Cloud implementation. The BA secured the sandbox for the testing environment, wrote test cases, and created a process to track and manage reported bugs.\n\nWhich additional step is required during the UAT planning process?`);
	questions.push(question);
	question.answers.push(new Answer(`Identify power users`));
	question.answers.push(new Answer(`Schedule deployment`, true));
	question.answers.push(new Answer(`Gather business requirements`));

	question = new Question(`Northern Trail Outfitters is getting ready to enter the user acceptance testing (UAT) phase of its latest Salesforce project. The business analyst (BA) plans to solicit and document sign-offs from the business as part of the UAT process.\n\nWhich sign-offs should the BA seek?`);
	questions.push(question);
	question.answers.push(new Answer(`Test cases to implement, individual test case functionality, and final go live date`, true));
	question.answers.push(new Answer(`Test cases to implement, user stories, and final go live date`));
	question.answers.push(new Answer(`Functional requirements, individual test case functionality, and final go live date`));

	question = new Question(`Northern Trail Outfitters launched a new feature on its Experience Cloud site to allow customers to compare features of similar products ahead of the major promotional event of the year. The user acceptance testing (UAT) passed successfully; however, many customers complained of issues when accessing the site.\n\nWhat did the BA overlook before recommending that the release go live?`);
	questions.push(question);
	question.answers.push(new Answer(`The UAT should have been performed with enough time to resolve bugs in the new feature`));
	question.answers.push(new Answer(`The UAT should have been performed with both peak load and average load simulation`, true));
	question.answers.push(new Answer(`The UAT should have been performed by customers who are familiar with the products`));

	question = new Question(`The sales team at No More Homelessness (NMH) has concerns that the process for distributing new leads is too slow. The VP of sales has engaged a business analyst (BA) to help map out a process to distribute new leads quickly. The BA sets up a meeting with the stakeholders and learns a stakeholder already has a solution in mind.\n\nWhat should the BA do next?`);
	questions.push(question);
	question.answers.push(new Answer(`Gather requirements and then note the proposed solution.`, true));
	question.answers.push(new Answer(`Ask the stakeholder to demo their solution to the project team.`));
	question.answers.push(new Answer(`Implement the solution now to save time in the planning phase.`));

	question = new Question(`The sales team is learning a new sales methodology. Management wants to align Salesforce opportunities with the methodology.\n\nWhat is the first step a business analyst should take to begin overhauling the Opportunity object?`);
	questions.push(question);
	question.answers.push(new Answer(`Understand the current business process.`, true));
	question.answers.push(new Answer(`Configure stages in Salesforce.`));
	question.answers.push(new Answer(`Create new reports and dashboards.`));

	question = new Question(`During the discovery phase of a Salesforce project, which types of analysis should a business analyst (BA) typically perform?`);
	questions.push(question);
	question.answers.push(new Answer(`Enterprise, Strategy, Stakeholder.`, true));
	question.answers.push(new Answer(`Financial, Technical, Operational.`));
	question.answers.push(new Answer(`Technical, Stakeholder, Enterprise`));

	question = new Question(`Bloomington Caregivers (BC) has an existing implementation of Salesforce. A business analyst (BA) wants to understand details about the Salesforce environment:\n.Custom apps\n.Active Salesforce Sites\n.Active flows\n.Custom tabs\n.Visualforce pages\n\nWhich path should the BA take to find this information?`);
	questions.push(question);
	question.answers.push(new Answer(`Review configuration settings.`, true));
	question.answers.push(new Answer(`Read business process documentation.`));
	question.answers.push(new Answer(`Conduct stakeholder interviews.`));

	question = new Question(`Cloud Kicks (CK) plans to establish a Center of Excellence (CoE).\n\nHow will CK benefit from using a CoE to define the long-term vision for its Salesforce org?`);
	questions.push(question);
	question.answers.push(new Answer(`CK will be better able to prioritize across teams and streamline processes.`, true));
	question.answers.push(new Answer(`CK will get insights to current business processes.`));
	question.answers.push(new Answer(`CK will develop a process to gather feedback from end users regularly.`));

	question = new Question(`A business analyst (BA) is using storytelling to communicate the vision for a Salesforce solution to business stakeholders.\n\nWhich storytelling technique should the BA use in their initial demo of a solution to business stakeholders?`);
	questions.push(question);
	question.answers.push(new Answer(`Give a perspective from a relatable persona that shows the development team can solve their business challenges.`, true));
	question.answers.push(new Answer(`Highlight a perspective from testing feedback that identifies bugs and pain points in their business challenges.`));
	question.answers.push(new Answer(`Describe a perspective from the business requirements document that addresses architectural concerns based on their business challenges.`));

	question = new Question(`As a part of Discovery, the business analyst (BA) at Ursa Major Solar (UMS) is trying to understand how Salesforce was implemented.\n\nWhat should the BA utilize to help uncover any technical constraints or potential problems in a Salesforce implementation?`);
	questions.push(question);
	question.answers.push(new Answer(`Salesforce Optimizer`, true));
	question.answers.push(new Answer(`Setup Audit Trail.`));
	question.answers.push(new Answer(`Reports and Dashboards.`));

	question = new Question(`The business analyst (BA) at Universal Containers (UC) needs to gather information for their project including the steps a user takes to accomplish a goal, challenges a user faces, people the user interacts with, applications they used to complete the steps, and their level of morale as they move through the process.\n\nWhich elicitation technique should the BA use?`);
	questions.push(question);
	question.answers.push(new Answer(`Journey mapping.`, true));
	question.answers.push(new Answer(`Survey/Questionnaire.`));
	question.answers.push(new Answer(`Focus Groups.`));

	question = new Question(`Dreamscape Flowers (DF) uses Kanban to complete its Salesforce development. In the middle of a sprint, the sales manager submits an important item to the team.\n\nWhat should the business analyst do next?`);
	questions.push(question);
	question.answers.push(new Answer(`Ask the team to reprioritize the backlog and work on the item at the top.`, true));
	question.answers.push(new Answer(`Ask the team to commit to the work for the next sprint.`));
	question.answers.push(new Answer(`Ask the team to pivot and complete the work immediately.`));

	question = new Question(`The sales team at Universal Containers (UC) has been using multiple tools to track opportunities, leading to inaccurate forecasting and unclear picture of UC's sales pipeline. UC has appointed a project team to implement Sales Cloud to help resolve these issues. The sales team doubts the new tool will meet their needs and is concerned it will be difficult to use. The business analyst (BA) assigned to the project knows the stakes are high to get the right solution in place.\n\nUsing their influence, what should the BA do to gain the necessary buy-in and support from the sales team to ensure a solution meets the requirement?`);
	questions.push(question);
	question.answers.push(new Answer(`Ask questions to understand their needs and focus on shared goals.`, true));
	question.answers.push(new Answer(`Demonstrate the BA's expertise and clearly state the decision is final.`));
	question.answers.push(new Answer(`Present the pros and cons of the decision by using logic and facts.`));

	question = new Question(`DreamHouse Realty (DHR) wants to leverage the power of Sales Cloud to implement its lead-to-cash process. A business analyst (BA) is tasked with understanding DHR's current processes, identifying areas of improvement, and communicating it effectively to stakeholders.\n\nWhat should the BA use to accomplish the goal?`);
	questions.push(question);
	question.answers.push(new Answer(`Process mapping.`, true));
	question.answers.push(new Answer(`Business analysis plan.`));
	question.answers.push(new Answer(`Change management.`));

	question = new Question(`Universal Containers (UC) wants to overhaul its Service Cloud implementation and has hired a consulting company to help drive requirements. In an effort to gain more information about the project, the business analyst (BA) has begun to review UC's structure to understand the functions of each department, how departments interact, and who reports to whom within UC.\n\nWhich technique is the BA using?`);
	questions.push(question);
	question.answers.push(new Answer(`Enterprise Analysis.`, true));
	question.answers.push(new Answer(`Stakeholder Analysis.`));
	question.answers.push(new Answer(`Strategic Analysis.`));

	question = new Question(`An executive at Zephyrus Relocation Services (ZRS) has tasked the internal Salesforce staff with the optimization of a very manual process in its Salesforce org.\n\nWhat should the business analyst (BA) do first before a future state is proposed to key stakeholders?`);
	questions.push(question);
	question.answers.push(new Answer(`Hold a kickoff meeting to set expectations with the project team.`, true));
	question.answers.push(new Answer(`Manage project integrations with the technical team.`));
	question.answers.push(new Answer(`Discuss project trade-offs with the executive sponsor.`));

	question = new Question(`Dreamscape Flowers (DF) has a large Salesforce org with sales, marketing, and billing teams pushing for the development of a large number of items in the backlog.\n\nWhich management process should the business analyst (BA) suggest to help the teams align on their competing priorities?`);
	questions.push(question);
	question.answers.push(new Answer(`Vision, Values, Methods, Obstacles, and Measures (V2MOM).`, true));
	question.answers.push(new Answer(`Integrated DEFinition for Process Description Capture Method (IDEF3).`));
	question.answers.push(new Answer(`Business Process Modeling Notation (BPMN).`));

	question = new Question(`Northern Trail Outfitters (NTO) is working with an implementation partner to transform its customer support team with Service Cloud. A new business analyst (BA) who is a replacement from the partner was introduced to NTO stakeholders during the discovery phase of the project. The new BA is still getting to know each of the stakeholders when they start the requirements workshop. The BA asks a stakeholder a discovery question and they see irritated.\n\nWhat should the BA do to build trust with the stakeholder as the project continues?`);
	questions.push(question);
	question.answers.push(new Answer(`Set up a casual meeting to create a personal connection with the stakeholder.`, true));
	question.answers.push(new Answer(`Reset project expectations at the next meeting with the stakeholder.`));
	question.answers.push(new Answer(`Ask an executive sponsor to address the stakeholder's concerns.`));

	question = new Question(`Which type of process diagram should the business analyst (BA) use at the beginning of a Salesforce project to outline high-level process areas such as "Prospect to Contract"?`);
	questions.push(question);
	question.answers.push(new Answer(`SIPOC (Suppliers, Inputs, Process, Outputs, Customers).`, true));
	question.answers.push(new Answer(`Value stream map.`));
	question.answers.push(new Answer(`Capability model.`));

	question = new Question(`A business analyst (BA) at No More Homelessness (NMH) is mapping a workflow process to onboard a new user group to a Service Cloud implementation.\n\nWhich level of detail should the BA use for the process map and why?`);
	questions.push(question);
	question.answers.push(new Answer(`Very detailed-lt should be prescriptive for new users following an unfamiliar process.`, true));
	question.answers.push(new Answer(`Simple-A high-level overview of the process is sufficient to show a new user experience.`));
	question.answers.push(new Answer(`Somewhat detailed-Since the process will be e repetitive, new users will learn and remember the details.`));

	question = new Question(`Angel Broking (AB) wants to reduce the amount of time it takes for customers to receive their orders after making an online purchase.\n\nWhich initial steps should the business analyst (BA) take to help determine why the order management and fulfillment process is slow?`);
	questions.push(question);
	question.answers.push(new Answer(`Work with stakeholders to identify relevant processes, select a key process with defined start and end points, and collaborate with process owners and users to create a current state process map.`, true));
	question.answers.push(new Answer(`Create a process map that includes detailed steps related to order management and fulfillment, analyze the process map for inefficiencies, and present findings to leadership.`));
	question.answers.push(new Answer(`Conduct interviews with stakeholders in the order management and fulfillment departments to identify individual pain points and brainstorm process improvement solutions.`));

	question = new Question(`A business analyst (BA) has been asked to evaluate all of the reporting tools that DreamHouse Realty (DHR) currently uses, including CRM Analytics, to identify gaps and overlaps in functionality.\n\nWhich tools would help DHR understand the existing functionality?`);
	questions.push(question);
	question.answers.push(new Answer(`Process map`, true));
	question.answers.push(new Answer(`Capability model.`));
	question.answers.push(new Answer(`Value stream map.`));

	question = new Question(`The business analyst (BA) is auditing data access by documenting Field-Level Security on the Account object in Salesforce.\n\nHow do end users participate as stakeholders in data governance?`);
	questions.push(question);
	question.answers.push(new Answer(`They provide valuable feedback on how they use data.`, true));
	question.answers.push(new Answer(`They export the data and back it up locally.`));
	question.answers.push(new Answer(`They implement their data entry workarounds in the system.`));

	question = new Question(`Management at Zephyrus Relocation Services (ZRS) has asked a business analyst (BA) to gain alignment from a group of people to determine what is in scope and out of scope on a Salesforce project.\n\nWhich group should the BA include early in the scoping process?`);
	questions.push(question);
	question.answers.push(new Answer(`Stakeholders.`, true));
	question.answers.push(new Answer(`Personas`));
	question.answers.push(new Answer(`Scrum team.`));

	question = new Question(`The product development team at Angel Broking (AB) is creating a process within Salesforce to onboard new retail employees. The business analyst (BA) creates a current state process map by interviewing a few members of the onboarding team using email questionnaires. After presenting the process map to the entire onboarding team, the BA receives feedback that it is incorrect.\n\nWhat should the BA do to provide the product development team with more accurate information about the onboarding team's process?`);
	questions.push(question);
	question.answers.push(new Answer(`Meet with key project stakeholders in a live workshop to build consensus on the current and desired onboarding processes.`, true));
	question.answers.push(new Answer(`Review survey feedback again to better understand pain points in the existing onboarding process.`));
	question.answers.push(new Answer(`Conduct individual interviews with each team member to gather more information about the existing onboarding process.`));

	question = new Question(`The business analyst (BA) at Ursa Major Solar (UMS) is getting ready to kick off a new Service Cloud project with the retail division to turn on the Web-to-Case functionality. The BA wants to better understand business processes so they can accurately scope the project.\n\nWhich type of documentation should the BA utilize?`);
	questions.push(question);
	question.answers.push(new Answer(`Current state analysis.`, true));
	question.answers.push(new Answer(`Use cases.`));
	question.answers.push(new Answer(`Object models.`));

	question = new Question(`One retail location of Dreamscape Flowers (DF) has been getting complaints from shoppers about being unable to find items in the store. The general manager has asked IT to configure tablets for the sales clerks so they can move freely around the store to assist customers.
	\nThe IT team writes a functional requirement:
	\n"Tablets running the Salesforce mobile app must allow users to access store inventory records which include current item count and item location."
	\n\nWhich user story should the business analyst (BA) write to describe the functional requirement?`);
	questions.push(question);
	question.answers.push(new Answer(`As a sales clerk, I want to see item availability and locations to help customers find items.`, true));
	question.answers.push(new Answer(`As a general manager, I want sales clerks to have tablets so they can help customers find items.`));
	question.answers.push(new Answer(`As a customer, I want sales clerks to have access to item availability to help them find items.`));

	question = new Question(`The business analyst (BA) at Ursa Major Solar (UMS) is deep in planning activities for its Commerce Cloud implementation project. The project sponsor asks the team to adjust their efforts due to budgetary constraints.\n\nWhat should the BA do next?`);
	questions.push(question);
	question.answers.push(new Answer(`Prioritize requirements.`, true));
	question.answers.push(new Answer(`Validate requirements.`));
	question.answers.push(new Answer(`Organize requirements.`));

	question = new Question(`A business analyst (BA) is working with a new customer on a Sales Cloud implementation. The executive sponsor for the project is new to the company and their role as VP. The sponsor has inherited functional requirements from the previous VP that were gathered 9 months ago.The project start date has yet to bedefined. The sponsor wants to use the inherited requirements in lieu of a traditional discovery process.\n\nWhat is the largest risk with this approach?`);
	questions.push(question);
	question.answers.push(new Answer(`The previous VP’s requirements fail to meet current formatting standards.`, true));
	question.answers.push(new Answer(`The previous VP's requirements may differ from those of the new executive.`));
	question.answers.push(new Answer(`The previous VP’s requirements are outside of the Salesforce framework.`));

	question = new Question(`After reviewing a technical demo, the Norther Trail Outfitters (NTO) sales leadership team wants to make adjustments to the original requirements around Sales Cloud opportunity management.\n\nWhat should the business analyst (BA) do to manage the requested changes?`);
	questions.push(question);
	question.answers.push(new Answer(`Update the change request log and draft a new user story.`, true));
	question.answers.push(new Answer(`Update the gap analysis document and scope statement specification.`));
	question.answers.push(new Answer(`Update the change management document and user acceptance testing plans.`));

	question = new Question(`A business analyst (BA) at Ursa Major Solar (UMS) is responsible for defining the enhancement features for the current Salesforce CPQ implementation that must be configured in the next phase of the project.\n\nWhich type of documents should the BA create to achieve the objective?`);
	questions.push(question);
	question.answers.push(new Answer(`Scope statement specification.`, true));
	question.answers.push(new Answer(`Functional requirements specification.`));
	question.answers.push(new Answer(`Business analysis plan.`));

	question = new Question(`The business analyst (BA) at Universal Containers (UC) is meeting with business leaders to elicit and document functional requirements specifications related to its new Salesforce implementation. The BA will also document the functionality this system should provide so it can be developed into a work item.\n\nWhat is the name of this documentation type?`);
	questions.push(question);
	question.answers.push(new Answer(`Business analysis plan.`, true));
	question.answers.push(new Answer(`Use case.`));
	question.answers.push(new Answer(`User story.`));

	question = new Question(`Universal Containers (UC) has asked a business analyst (BA) to assist the sales management team with a request for a new picklist field called "Lost Reason" on the Opportunity object with the goal of improving pipeline reports. After mapping the managers to the sales leader persona and obtaining feedback from them, the BA has discovered that the managers want to better understand Closed/Lost Opportunities so they can help sales teams close more deals.\n\nWhich option should the BA use to construct the user story?`);
	questions.push(question);
	question.answers.push(new Answer(`As a sales leader, I want to see more details on Closed/Lost Opportunities so I can help the sales team improve close rates.`, true));
	question.answers.push(new Answer(`As a sales team member, I need additional enablement training and reporting information to help me improve close rates.`));
	question.answers.push(new Answer(`As a sales leader, I need a new "Closed/Lost Reason" picklist field on Opportunities and better reports to help the sales team improve close rates.`));

	question = new Question(`At Bloomington Caregivers (BC), a business analyst (BA), solution architect, lead developer, quality assurance lead, and other team members need access to user stories as part of the Agile lifecycle of enhancements to a Marketing Cloud integration project.\n\nWhat should the BA do to give all team members access and visibility to the most recent user stories as the project is in motion?`);
	questions.push(question);
	question.answers.push(new Answer(`Define a common repository to hold all user stories and track changes over time.`, true));
	question.answers.push(new Answer(`Send emails to stakeholders with all of the changes to the user stories.`));
	question.answers.push(new Answer(`Allow each team member to merge all user stories at the end of user acceptance testing.`));

	question = new Question(`Angel Broking (AB) is developing a new recruitment app using Service Cloud. The project team has started writing user stories including:\n"As a human resources (HR) manager, I need to document the progress of a candidate's submission so I can manage the candidate's application throughout the recruiting process."\n\nWhat is one definition of done for this user story?`);
	questions.push(question);
	question.answers.push(new Answer(`The acceptance criteria has been approved.`, true));
	question.answers.push(new Answer(`The Candidate Status field can be updated.`));
	question.answers.push(new Answer(`The Candidate object has Edit access.`));

	question = new Question(`The Dreamscape Flowers (DF) business analyst (BA) is frustrated because the requirements tracking spreadsheet is often incomplete or out-of-sync for the Slack transition project. The development team has recommended that the BA use a DevOps tool as an alternate.\n\nWhat are the benefits of using a DevOps tool in this situation?`);
	questions.push(question);
	question.answers.push(new Answer(`Tracks changes on a daily basis and provides a history of changes.`, true));
	question.answers.push(new Answer(`Tracks changes for the testing team and provides access to user stories.`));
	question.answers.push(new Answer(`Tracks changes in real time and provides a single source of truth.`));

	question = new Question(`Universal Containers (IJC) has scheduled a meeting with stakeholders, business analyst (BAs), and technical resources to review user stories. A BA reviews the user stories in advance of the meeting and notices that some best practices have been ignored. The first user story is focused on escalating cases in Service Cloud:\n"The customer service agent needs the ability to escalate a case so they can assign high-risk cases to Tier 2 support for faster resolution."\nAcceptance criteria:\n1 Add permission set\n2 Users can escalate cases\n3 Create fields on the Case object\n4 Reports\n\nWhich best practice was ignored?`);
	questions.push(question);
	question.answers.push(new Answer(`The "what" of the acceptance criteria is negotiable.`, true));
	question.answers.push(new Answer(`The "why" of the user story focused on user needs.`));
	question.answers.push(new Answer(`The "who" of the user story well-defined.`));

	question = new Question(`The Salesforce delivery team at No More Homelessness (NMH) consistently has user stories that developers start but are unable to complete during each sprint. During the most recent retrospective, the development team expressed that they are running out of time to complete the stories. The team used the INVEST checklist to diagnose why these stories are incomplete at the end of the sprint.\n\nWhich checklist item is the most likely reason why the stories are incomplete at the close of the sprint?`);
	questions.push(question);
	question.answers.push(new Answer(`Small.`, true));
	question.answers.push(new Answer(`Valuable.`));
	question.answers.push(new Answer(`Negotiable.`));

	question = new Question(`As a business analyst (BA) starts engaging stakeholders for a user story writing workshop, an executive sponsor questions why the Commerce Cloud project is creating user stories rather than standard requirements.\n\nWhat is one benefit of creating user stories that the BA can share with the executive sponsor?`);
	questions.push(question);
	question.answers.push(new Answer(`It helps testers determine the most efficient way to validate solutions.`, true));
	question.answers.push(new Answer(`It defines technical specifications early in the process.`));
	question.answers.push(new Answer(`It saves time when prioritizing and implementing functionality.`));

	question = new Question(`A business analyst (BA) working on a Service Cloud implementation is reviewing user stories to verify they are written effectively.\n\nWhat should the BA confirm about the user stories when completing this review?`);
	questions.push(question);
	question.answers.push(new Answer(`They can be really prioritized and are small enough to estimate accurately.`, true));
	question.answers.push(new Answer(`They contain substantial details and focus on technical elements.`));
	question.answers.push(new Answer(`They are dependent on related acceptance criteria and overlap with other use cases.`));

	question = new Question(`A business analyst (BA) at No More Homelessness (NMH) has begun user acceptance testing for a new Experience Cloud implementation with the project team. A major gap for one of the personas was identified in the documented scenarios.\n\nWhat went wrong?`);
	questions.push(question);
	question.answers.push(new Answer(`Failure to include all stakeholders in the requirements gathering process.`, true));
	question.answers.push(new Answer(`Failure to perform throughout unit testing during the development process.`));
	question.answers.push(new Answer(`Failure to validate the application against the functional requirements.`));

	question = new Question(`The Salesforce information technology (IT) team has built a solution in a sandbox for a cross-functional project to implement Customer 360. It is time for user acceptance testing (IJAT).\n\nWhat is a business analyst's role during UAT?`);
	questions.push(question);
	question.answers.push(new Answer(`Coordinate stakeholder participation and notify the team when scenarios fail so IT can solve potential problems prior to go live.`, true));
	question.answers.push(new Answer(`Document user stories and clarify business needs so IT can deliver results based on the requirements.`));
	question.answers.push(new Answer(`Assist in building the requirements using standard functionality so IT can focus on code-related scenarios.`));

	question = new Question(`A business analyst (BA) is preparing for user acceptance testing for case management scenarios in Service Cloud.\n\nWhat should the BA do to help prevent gaps from being discovered after go live?`);
	questions.push(question);
	question.answers.push(new Answer(`Write test scripts that reflect real life and cover the requirements`, true));
	question.answers.push(new Answer(`Streamline testing by limiting the number of testers involved.`));
	question.answers.push(new Answer(`Focus more on happy path testing and less on edge case testing.`));

	question = new Question(`Zephyrus Relocation Services (ZRS) is creating a new lead conversion process in Sales Cloud. During a recent sprint, the business analyst created user stories related to the Opportunity object. Test scripts were created for the lead conversion process. All of the test scripts passed and the new functionality was deployed. After deployment, end users reported error messages when manually creating new Opportunities.\n\nWhich area of user acceptance testing (UAT) was overlooked?`);
	questions.push(question);
	question.answers.push(new Answer(`End users who are experts in that functionality should participate in UAT.`, true));
	question.answers.push(new Answer(`Several teams should be part of IJAT to represent multiple viewpoints.`));
	question.answers.push(new Answer(`Functionality on interconnected objects should be part of UAT.`));

	question = new Question(`A project is in the user acceptance testing phase of a Sales Cloud implementation at Angel Broking (AB).The business analyst (BA) is coordinating the test case execution and supporting the testers. One of the testers fail a test case because they were unable to see the custom field identified in the directions. The BA has reviewed the details of the failed test case and compared the expected outcome to the requirements.\n\nWhat should the BA do next?`);
	questions.push(question);
	question.answers.push(new Answer(`Assign a bug to the development team.`, true));
	question.answers.push(new Answer(`Attempt to reproduce the issue.`));
	question.answers.push(new Answer(`Assign the test case to another tester.`));
	
	/* question = new Question(``);
	questions.push(question);
	question.answers.push(new Answer(``, true));
	question.answers.push(new Answer(``));
	question.answers.push(new Answer(``)); */

	return questions.concat(getMultipleAnswerQuestions());
}