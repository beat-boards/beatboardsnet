<template>
    <div class="global">
        <div class="container">
            <div class="section">
                <div class="box has-background-light">
                    <h1 class="title is-1 has-text-centered">
                        INSERT USER HERE
                    </h1>
                </div>

                <div class="box has-background-light">
                    <div class="columns">
                        <div class="column is-narrow">
                            <figure class="image is-128x128">
                                <img class="is-rounded" src="../assets/about/auros.jpg" alt="Auros"/>
                            </figure>
                        </div>
                        <div class="column">
                            <h3 class="is-3">
                                <b>Rank: </b>#1<br>
                                <b>Ranking Points: </b>8704.41RP<br>
                                <b>Banned: </b>False<br>
                                <b>Country: </b>US<br>
                            </h3>
                        </div>
                        <div class="column">
                            <h3 class="is-3">
                                <b>UUID: </b>cc0d001a-9441-4768-a5e8-56f0e2e612a4<br>
                                <b>Steam ID: </b>76561198088728803<br>
                                <b>Oculus ID: </b>None<br>
                                <b>Role: </b>Owner<br>
                            </h3>
                        </div>
                    </div>
                </div>

                <div class="box has-background-light">
                    <table class="table">
                        <thead>
                            <tr>
                                <th type="rank">Rank</th>
                                <th>Map</th>
                                <th type="score" class="has-text-centered">Score</th>
                                <th>Modifiers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>#8</th>

                                <th class="song">
                                    <div style="display: flex;">
                                        <figure class="">
                                            <img type="songImage" src="../assets/about/auros.jpg" alt="Map" style="width: 46px; height: 46px;">
                                        </figure>
                                        <div>
                                            <a href="#">
                                            <span class="songInfo">ke-ji feat. Nanahira - Ange du Blanc Pur<span style="color:#d1d1d1;"> by </span><span class="mapper">Hexagonial</span><span style="color:#d1d1d1;"> on </span> <span style="color:#8f48db;">Expert+</span></span>
                                            </a>
                                            <br>
                                            <span title="2019-06-19 04:08:40 UTC" class="songInfo">TIME</span>
                                        </div>
                                    </div>
                                </th>

                                <th>
                                    <h5 class="title is-5 has-text-centered">694.41 RP<br><h6 class="subtitle is-6">(694.41 RP)<br>85.4%</h6></h5>      
                                </th>

                                <th>
                                    <h6 class="subtitle is-6">DA, FS</h6>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
  table {
    width: 100%;
    align-content: left;
  }
  th[type="rank"] {
    width: 100px;
  }
  th[type="score"] {
    width: 150px;
  }
  img[type="songImage"] {
    border-radius: 20%;
  }
  span[class="songInfo"] {
    padding: 12px;
  }
</style>