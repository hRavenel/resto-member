<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <img :src="this.restoUrl"/>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="name" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="name" class="mdl-textfield__label">Describe me</label>
        </div>
        <div class="actions">
          <a @click.prevent="postResto" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST A RESTO
          </a>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
  // import parse from 'xml-parser'
  export default {
    data () {
      return {
        'restoUrl': 'toto'
      }
    },
    mounted () {
      // this.$http.get('https://therestoapi.com/api/images/get?format=xml&results_per_page=1').then(response => {
      //   this.restoUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content
      // })
    },
    methods: {
      postResto () {
        this.$root.$firebaseRefs.resto.push(
          {
            'url': this.restoUrl,
            'comment': this.title,
            'info': 'Posted by Charles on Tuesday',
            'created_at': -1 * new Date().getTime()
          })
          .then(this.$router.push('/post'))
      }

    }
  }
</script>
