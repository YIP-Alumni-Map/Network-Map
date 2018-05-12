const steps = [
  {
    label: 'personal info',
    Component: require('../components/location')
  },
  {
    label: 'locations',
    Component: () => require('../components/location')
  },
  {
    label: 'organisations',
    Component: () => require('../components/organisations')
  },
  {
    label: 'topics',
    Component: () => require('../components/topics')
  },
]

module.exports = steps
