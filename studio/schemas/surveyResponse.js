
const JOB_TYPES = [
  { title: 'Full-time', value: 'fulltime' },
  { title: 'Freelance', value: 'freelance' },
  { title: 'Student', value: 'student' },
  { title: 'Hobby', value: 'hobby' },
];

const WORKSHOP_INTEREST = ['yes', 'no', 'maybe'];
const CODING_EXPERIENCE = ['0-1', '1-2', '2-4', '4-6', '6+'];

export default {
  name: 'surveyResponse',
  title: 'React Survey',
  type: 'document',
  fields: [
    {
      title: 'Are you a professional programmer or a student?',
      name: 'jobType',
      type: 'string',
      options: {
        list: JOB_TYPES,
        layout: 'radio', // <-- defaults to 'dropdown'
      },
      validation: (Rule) =>
        Rule.required().custom((jobType) => {
          const validJobTypes = JOB_TYPES.map((job) => job.value);
          return validJobTypes.includes(jobType) ? true : 'Invalid job type';
        }),
    },
    {
      name: 'yearsProgramming',
      title: 'Number of years programming',
      type: 'string',
      validation: (Rule) =>
        Rule.required().custom((yearsProgramming) => {
          return CODING_EXPERIENCE.includes(yearsProgramming)
            ? true
            : 'Invalid number of years programming range';
        }),
    },
  ],

  preview: {
    select: {
      yearsProgramming: 'yearsProgramming',
      jobType: 'jobType',
    },
    prepare(selection) {
      const {
        yearsProgramming,
        jobType,
      } = selection;
      const jobName =
        jobType &&
        JOB_TYPES.flatMap((option) =>
          option.value === jobType ? [option.title] : []
        );
      return {
        title: `${jobName} developer`,
        subtitle: `Years programming: ${yearsProgramming}`,
      };
    },
  },
};
