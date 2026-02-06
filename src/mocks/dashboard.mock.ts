/**
 * Mock data for dashboard matching the design
 */

export const mockTimelineMilestones = [
  { id: '1', date: 'Mar 17', label: 'Kickoff Workshop', status: 'completed' as const },
  { id: '2', date: 'March 18', label: 'Data Collection', status: 'completed' as const },
  { id: '3', date: 'May 22', label: 'Initial Phase', status: 'current' as const },
  { id: '4', date: 'May 23', label: 'Verification', status: 'upcoming' as const },
  { id: '5', date: 'Jun 18', label: 'Completion Reviews', status: 'upcoming' as const },
  { id: '6', date: 'August 21', label: 'Cycle Conclusion', status: 'upcoming' as const },
];

export const mockStatistics = {
  overallProgress: '78.65%',
  totalCriteria: 95,
  completedCriteria: 52,
  evidenceDocuments: 386,
  evidenceCompleted: 302,
  uploadedToDGA: 258,
};

export const mockProgressColumns = [
  // Column 1: 3 categories
  {
    title: 'Digital Transformation',
    subtitle: 'DT1-DT3',
    progress: '77.78%',
    categories: [
      {
        name: 'Digital Transformation',
        items: [
          { name: 'Item 1', status: 'completed' as const },
          { name: 'Item 2', status: 'completed' as const },
          { name: 'Item 3', status: 'completed' as const },
            { name: 'Item 4', status: 'completed' as const },

        ],
      },
      {
        name: 'Digital Governance',
        items: [
          { name: 'Item 1', status: 'completed' as const },
          { name: 'Item 2', status: 'completed' as const },
        //   { name: 'Item 3', status: 'partially-uploaded' as const },
        //     { name: 'Item 4', status: 'completed' as const },

        ],
      },
      {
        name: 'Enterprise Architecture',
        items: [
          { name: 'Item 1', status: 'completed' as const },
          { name: 'Item 2', status: 'completed' as const },
          { name: 'Item 3', status: 'completed' as const },
          { name: 'Item 4', status: 'completed' as const },
        ],
      },
    ],
  },
  // Column 2: 3 categories
  {
    title: 'Digital Culture And Environment',
    subtitle: 'DC1-DC3',
    progress: '75.00%',
    categories: [
      {
        name: 'Digital Culture And Environment',
        items: [
          { name: 'Item 1', status: 'completed' as const },
          { name: 'Item 2', status: 'partially-uploaded' as const },
            { name: 'Item 3', status: 'in-progress' as const },
        ],
      },
      {
        name: 'Leadership Development',
        items: [
          { name: 'Item 1', status: 'completed' as const },
          { name: 'Item 2', status: 'completed' as const },
          { name: 'Item 3', status: 'completed' as const },
          { name: 'Item 4', status: 'completed' as const },
        ],
      },
      {
        name: 'Skills & Capacity Building',
        items: [
          { name: 'Item 1', status: 'completed' as const },
          { name: 'Item 2', status: 'completed' as const },
          { name: 'Item 3', status: 'partially-uploaded' as const },
        ],
      },
    ],
  },
  // Column 3: 1 category
  {
    title: 'Business Processes',
    subtitle: 'BP1-BP3',
    progress: '81.82%',
    categories: [
      {
        name: 'Business Processes',
        items: [
          { name: 'Item 1', status: 'completed' as const },
          { name: 'Item 2', status: 'partially-uploaded' as const },
          { name: 'Item 3', status: 'completed' as const },
          { name: 'Item 4', status: 'completed' as const },
        ],
      },
    ],
  },
  // Column 4: 2 categories
  {
    title: 'Risk Management',
    subtitle: 'RM1-RM3',
    progress: '66.67%',
    categories: [
      {
        name: 'Risk Management',
        items: [
          { name: 'Item 1', status: 'completed' as const },
            { name: 'Item 2', status: 'not-started' as const },
          { name: 'Item 3', status: 'completed' as const },
          { name: 'Item 4', status: 'completed' as const },
          { name: 'Item 5', status: 'completed' as const },
        ],
      },
      {
        name: 'Business Continuity',
        items: [
          { name: 'Item 1', status: 'completed' as const },
            { name: 'Item 2', status: 'not-started' as const },
          { name: 'Item 3', status: 'completed' as const },
          { name: 'Item 4', status: 'completed' as const },
            { name: 'Item 5', status: 'not-started' as const },
          { name: 'Item 6', status: 'completed' as const },
            { name: 'Item 7', status: 'not-started' as const },
        ],
      },
    ],
  },
  // Column 5: 3 categories
  {
    title: 'Support Systems',
    subtitle: 'SS1-SS3',
    progress: '70.45%',
    categories: [
      {
        name: 'Support Systems',
        items: [
          { name: 'Item 1', status: 'completed' as const },
          { name: 'Item 2', status: 'completed' as const },
          { name: 'Item 3', status: 'partially-uploaded' as const },
        ],
      },
      {
        name: 'Governance Platforms',
        items: [
          { name: 'Item 1', status: 'completed' as const },
          { name: 'Item 2', status: 'partially-uploaded' as const },
        ],
      },
      {
        name: 'IT Infrastructure',
        items: [
          { name: 'Item 1', status: 'completed' as const },
            { name: 'Item 2', status: 'delayed' as const },
          { name: 'Item 3', status: 'completed' as const },
          { name: 'Item 4', status: 'partially-uploaded' as const },
        //   { name: 'Item 5', status: 'completed' as const },
        ],
      },
    ],
  },
  // Column 6: 1 category
  {
    title: 'Service Quality',
    subtitle: 'SQ1-SQ3',
    progress: '85.00%',
    categories: [
      {
        name: 'Service Quality',
        items: [
            { name: 'Item 1', status: 'delayed' as const },
          { name: 'Item 2', status: 'completed' as const },
            { name: 'Item 3', status: 'partially-uploaded' as const },
          { name: 'Item 4', status: 'completed' as const }, 
          { name: 'Item 5', status: 'completed' as const },
            { name: 'Item 6', status: 'partially-uploaded' as const },
            { name: 'Item 7', status: 'partially-uploaded' as const },
        ],
      },
    ],
  },
  // Column 7: 2 categories
  {
    title: 'User Engagement',
    subtitle: 'UE1-UE3',
    progress: '88.89%',
    categories: [
      {
        name: 'User Engagement',
        items: [
          { name: 'Item 1', status: 'completed' as const },
          { name: 'Item 2', status: 'completed' as const },
          { name: 'Item 3', status: 'partially-uploaded' as const },
        ],
      },
      {
        name: 'User Relationship',
        items: [
          { name: 'Item 1', status: 'completed' as const },
          { name: 'Item 2', status: 'completed' as const },
          { name: 'Item 3', status: 'partially-uploaded' as const },
        ],
      },
    ],
  },
  // Column 8: 3 categories
  {
    title: 'Data Governance',
    subtitle: 'DG1-DG3',
    progress: '72.22%',
    categories: [
      {
        name: 'Data Governance',
        items: [
          { name: 'Item 1', status: 'completed' as const },
          { name: 'Item 2', status: 'completed' as const },
          { name: 'Item 3', status: 'partially-uploaded' as const },
        ],
      },
      {
        name: 'Data Usage & Availability',
        items: [
          { name: 'Item 1', status: 'completed' as const },
          { name: 'Item 2', status: 'completed' as const },
          { name: 'Item 3', status: 'partially-uploaded' as const },
        ],
      },
      {
        name: 'Open Data',
        items: [
          { name: 'Item 1', status: 'completed' as const },
          { name: 'Item 2', status: 'completed' as const },
          { name: 'Item 3', status: 'partially-uploaded' as const },
        ],
      },
    ],
  },
  // Column 9: 3 categories
  {
    title: 'Innovation',
    subtitle: 'IN1-IN3',
    progress: '79.17%',
    categories: [
      {
        name: 'Innovation',
        items: [
          { name: 'Item 1', status: 'completed' as const },
          { name: 'Item 2', status: 'partially-uploaded' as const },
        ],
      },
      {
        name: 'Digital Channels',
        items: [
          { name: 'Item 1', status: 'completed' as const },
          { name: 'Item 2', status: 'completed' as const },
          { name: 'Item 3', status: 'completed' as const },
        ],
      },
      {
        name: 'User Experience',
        items: [
          { name: 'Item 1', status: 'completed' as const },
          { name: 'Item 2', status: 'completed' as const },
          { name: 'Item 3', status: 'partially-uploaded' as const },
        ],
      },
    ],
  },
  // Column 10: 2 categories
  {
    title: 'Creative Solutions',
    subtitle: 'CS1-CS3',
    progress: '83.33%',
    categories: [
      {
        name: 'Cloud Infrastructure',
        items: [
            { name: 'Item 1', status: 'delayed' as const },
            { name: 'Item 2', status: 'delayed' as const },

            { name: 'Item 3', status: 'delayed' as const },
            { name: 'Item 4', status: 'delayed' as const },
        ],
      },
      {
        name: 'Creative Solutions',
        items: [
          { name: 'Item 1', status: 'completed' as const },
            { name: 'Item 2', status: 'delayed' as const },
        ],
      },
    ],
  },
];

export const mockPerformanceLeaders = [
  {
    id: '1',
    name: 'Ahmed Al-Ali',
    perspective: 'Strategy Perspective',
    score: 96,
  },
  {
    id: '2',
    name: 'Sarah Al-Khalid',
    perspective: 'Beneficiary Perspective',
    score: 94,
  },
  {
    id: '3',
    name: 'Mohammad Al-Mansour',
    perspective: 'IT Perspective',
    score: 92,
  },
];

export const mockPerformanceData = [
  { month: 'Jan', value: 80 },
  { month: 'Feb', value: 70 },
  { month: 'Mar', value: 75 },
  { month: 'Apr', value: 50 },
  { month: 'May', value: 85 },
  { month: 'Jun', value: 65 },
  { month: 'Jul', value: 60 },
  { month: 'Aug', value: 85 },
  { month: 'Sept', value: 70 },
  { month: 'Oct', value: 55 },
  { month: 'Nov', value: 82 },
  { month: 'Dec', value: 70 },
];

export const mockRecentActivities = [
  {
    id: '1',
    type: 'document' as const,
    title: 'Document "Strategy_Review.PDF"',
    description: 'Was Uploaded By Ahmed Khalid',
    timestamp: '5 Mins Ago',
  },
  {
    id: '2',
    type: 'task' as const,
    title: 'Task "Review Compliance Files"',
    description: 'Was Assigned To Mona Hamed',
    timestamp: '20 Mins Ago',
  },
  {
    id: '3',
    type: 'criterion' as const,
    title: 'New Criterion "5.3 Digital Identity"',
    description: 'Was Created By Admin',
    timestamp: '1 Hour Ago',
  },
];
