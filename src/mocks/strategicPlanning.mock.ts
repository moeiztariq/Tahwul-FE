/**
 * Mock data for Strategic Planning page
 */

export const mockStrategicPlanningData = {
  id: '1',
    category: 'Digital Transformation Strategic Planning',
    subCategory: 'Strategy & Planning',

  title: 'Digital Transformation Strategic Planning',
  description: 'Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals',
  completionPercentage: 100,
  evidenceSummary: {
    total: 4,
    underReview: 3,
    inProgress: 2,
    completed: 1,
  },
  sections: {
    objective: "Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030.",
    implementationRequirements: [
      "A. The Organization's Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization's Overall Strategy.",
      "B. Strategic Initiatives, Programs, And Performance Indicators.",
      "C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy's Objectives.",
      "D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy's Objectives.",
    ],
    evidenceDocuments: "Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.",
    relatedRegulations: "Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).",
    scope: "All Government Entities.",
  },
  leaders: [
    {
      id: '1',
      name: 'Ahmed Al-Ali',
      role: 'Strategy Perspective',
      avatar: undefined,
    },
    {
      id: '2',
      name: 'Ahmed Al-Ali',
      role: 'Strategy Perspective',
      avatar: undefined,
    },
  ],
  evidenceActivities: [
    {
      id: '1',
      type: 'document' as const,
      title: 'Roadmap_Version1.Docx Uploaded By Rami AlSharif',
      description: '',
      timestamp: '5 Mins Ago',
    },
    {
      id: '2',
      type: 'document' as const,
      title: 'KPI_Framework.Xlsx Uploaded By Mona Hamed',
      description: '',
      timestamp: '20 Mins Ago',
    },
    {
      id: '3',
      type: 'document' as const,
      title: 'Digital_Transformation_Plan.Pdf Approved By Advisory Team',
      description: '',
      timestamp: '1 Hour Ago',
    },
  ],
  evidenceDocuments: [
    {
      id: '1',
      documentNumber: '5.4.1.1',
      documentName: 'Digital_Transformation_Plan.Pdf',
      documentLead: 'Ahmed Khaled',
      documentPreparer: 'Ahmed Khaled',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'approved' as const,
    },
    {
      id: '2',
      documentNumber: '5.4.1.2',
      documentName: 'KPI_Framework.Xlsx',
      documentLead: 'Mona Hamed',
      documentPreparer: 'Mona Hamed',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'pending-review' as const,
    },
    {
      id: '3',
      documentNumber: '5.4.1.3',
      documentName: 'Roadmap_Version1.Docx',
      documentLead: 'Rami AlSharif',
      documentPreparer: 'Rami AlSharif',
      date: '2025-08-01',
      dueDate: '2025-08-01',
      status: 'pending-review' as const,
    },
  ],
  comments: [
    {
      id: '1',
      author: 'Sara Ibrahim',
      authorInitial: 'E',
      text: 'Ensure The Plan Includes A Clear Governance Model.',
      timestamp: '2025-08-05',
    },
    {
      id: '2',
      author: 'Mona Hamed',
      authorInitial: 'M',
      text: 'Ensure The Plan Includes A Clear Governance Model.',
      timestamp: '2025-08-05',
    },
  ],
};
