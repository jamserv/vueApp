<template>
  <div>
    <ol class="breadcrumb">
      <li><a href="#">Home</a></li>
      <li><a href="#">{{msg}}</a></li>
    </ol>     
    <!--
    <p v-if="message">Original Message :: {{message}}</p>
    <p v-if="message">Reverse Message :: {{reversedMessage}}</p> -->
    <input type="text" v-model="search" v-on:keyup.enter="doSearch"/>
    <table class="table table-responsive">
      <thead>
          <tr>
              <td>name</td>
              <td>username</td>
              <td>email</td>
              <td>phone</td>
              <td>website</td>
          </tr>
      </thead>
      <tbody>
          <tr v-for="user in searchTbl">
              <td>{{user.name}}</td>
              <td>{{user.username}}</td>
              <td>{{user.email}}</td>
              <td>{{user.phone}}</td>
              <td>{{user.website}}</td>
          </tr>
      </tbody>
    </table>
    <br />
    <small>{{answer}}</small>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      search: '',
      message: null,
      msg: 'home',
      answer: '',
      users: []
    }
  },
  mounted() {
    this.getUsers();
  },
  watch: {
    message: function (newMessage) {
      //this.answer = 'Writing message...';
      //this.getReponser(newMessage);
    }
  },
  methods: {
    doSearch: function () {
      console.log('buscar...')
    },
    getUsers: function() {	
       axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.users = response.data;
            });
    }
  },
  computed: {
    searchTbl: function () {
      var self = this;
      return this.users.filter((user) => user.name.indexOf(self.search) !== -1 ||
            user.username.indexOf(self.search) !== -1 ||
            user.email.indexOf(self.search) !== -1 ||
            user.phone.indexOf(self.search) !== -1 ||
            user.website.indexOf(self.search) !== -1);
    }
    /*
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
    */
  }
}
</script>
