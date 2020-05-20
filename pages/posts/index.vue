<template>
  <div>
    <div class="container">
      <b-row>
        <b-col cols="12">
          <h1 class="page-title">Page 1</h1>
        </b-col>
      </b-row>
    </div>

    <div class="container posts">
      <b-row>
        <b-col md="6">
          <ArticleComponent/>
        </b-col>
        <b-col md="6">
          <ArticleComponent/>
        </b-col>
        <b-col md="6">
          <ArticleComponent/>
        </b-col>
        <b-col md="6">
          <ArticleComponent/>
        </b-col>
      </b-row>
    </div>

    <b-row class="paginator">
      <b-col cols="12">
        <nav aria-label="Page navigation">
          <ul>
            <span class="page-number current">1</span>
            <a class="page-number" href="/page/2/">2</a>
            <a class="page-number" href="/page/3/">3</a>
            <span class="space">…</span>
            <a class="page-number" href="/page/25/">25</a>
            <a class="extend next" rel="next" href="/page/2/">Next</a>
          </ul>
        </nav>
      </b-col>
    </b-row>

  </div>
</template>

<script>
  import ArticleComponent from "../../components/ArticleComponent";
  export default {
    name: "Posts",
    components: {ArticleComponent},
  }
</script>

