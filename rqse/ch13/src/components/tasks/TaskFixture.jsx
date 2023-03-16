export const initialTasks = [
  {
    id: 0, 
    title: 'Complete task list app', 
    steps: [
      {
        num: 0, 
        desc: "add steps capability", 
        complete: false
      }, 
      {
        num: 1, 
        desc: "add accordian capability", 
        complete: false
      }
    ], 
    done: false 
  },
  { 
    id: 1, 
    title: 'Add steps to task list', 
    steps: [
      {
        num: 0, 
        desc: "create step component", 
        complete: false
      }, 
      {
        num: 1, 
        desc: "add step form component", 
        complete: false
      }, 
      {
        num: 2, 
        desc: "sort steps", 
        complete: false
      }
    ]
    , done: false
  },
  { 
    id: 2, 
    title: 'Drink latte', 
    steps: [
      {
        num: 0, 
        desc: "turn on machine", 
        complete: true
      }, 
      {
        num: 1, 
        desc: "steam milk", 
        complete: true
      }, 
      {
        num: 2, 
        desc: "draw shot", 
        complete: true
      }, 
      {
        num: 3, 
        desc: "enjoy", 
        complete: true
      }
    ], 
    done: false
  }
];
