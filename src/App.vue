<template>
  <div id="app" class="container p-3">
    

    <b-row>
      <b-col md="3" class="">
        <h5 class="mt-5 text-center"> Bootstrap Vue Toolkit Demo </h5>
        <p class="my-5 text-center">
          <a class="github-button" href="https://github.com/topfullstack/bootstrap-vue-toolkit" data-size="large" 
      aria-label="Star topfullstack/bootstrap-vue-toolkit on GitHub">Star</a>
        </p>
        <b-nav pills vertical>
          <b-nav-item to="/page/FormBuilder">FormBuilder</b-nav-item>
          <b-nav-item to="/page/DataTable">DataTable</b-nav-item>
        </b-nav>
        
      </b-col>
      <b-col md="9">
        <p>
          
          Source: <b-link :href="`https://github.com/topfullstack/bootstrap-vue-toolkit/blob/master/src/views/${$route.name}.vue`">
        {{`https://github.com/topfullstack/bootstrap-vue-toolkit/blob/master/src/views/${$route.name}.vue`}}
        </b-link>
        </p>
        <b-card :header="$route.name">
          <router-view></router-view>
        </b-card>
      </b-col>
    </b-row>
    
  </div>
</template>



