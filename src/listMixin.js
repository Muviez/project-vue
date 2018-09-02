export default {
    data() {
      return {
        title: 'Hello i am Vue.js',
        searchName: '',
        names: ['Vlad', 'Egor', 'Kirill', 'Oleg', 'Anton']
      }
    },
    computed: {
      filteredNames() {
        return this.names.filter(name => {
          return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
        })
      }
    }
}