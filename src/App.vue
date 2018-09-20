<template>
  <div id="app" class="container p-3">
    <h2 class="pb-3 text-center">Bootstrap Vue Toolkit Demo</h2>
    <b-row>
      <b-col md="3">
        <b-nav pills vertical>
          <b-nav-item to="/form-builder">FormBuilder</b-nav-item>
          <b-nav-item to="/data-table">DataTable</b-nav-item>
        </b-nav>
      </b-col>
      <b-col md="9">
        <b-card :header="String($route.name).toUpperCase()">
          <router-view></router-view>
        </b-card>
      </b-col>
    </b-row>
    
  </div>
</template>



