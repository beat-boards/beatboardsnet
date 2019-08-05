<template>
  <div class="global">
    <div class="container">
      <div class="section">
        <div class="box has-background-light">
          <h1 class="title is-1 has-text-centered">
            Global Leaderboards
          </h1>
        </div>
        <div class="box has-background-light">
          <div class="field has-text-centered">
            <div class="control has-icons-left">
              <center><input class="input" type="search" placeholder="Search for a user here"></center>
              <span class="icon is-small is-left"><i class="fas fa-search"></i></span>
            </div>
          </div>
        </div>
        <div class="box has-background-light">
          <table class="table">
            <thead>
              <tr>
                <th type="pfp"></th>
                <th type="rank">Rank</th>
                <th type="user">User</th>
                <th type="rp">Ranking Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td type="pfp"><figure class="image is-32x32"><img class="is-rounded" src="../assets/about/auros.jpg" alt="Auros"/></figure></td>
                <td type="pfp">#1</td>
                <td>Auros</td>
                <td>7059.41pp</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  input[type="search"] {
    width: 100%;
    background-color: #1d1d1d;
  }
  table {
    width: 100%;
    align-content: left;
  }
  th[type="pfp"] {
    width: 40px;
  }
  th[type="rank"] {
    width: 200px;
  }
</style>
