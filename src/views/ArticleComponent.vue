<template>
  <article class="d-flex flex-column pb-5">
    <div class="image">
      <router-link :to="{name: 'PostDetails', params: {slug: 'how-to'}}">
        <picture>
          <img src="/images/container-ship.jpg" alt=""/>
        </picture>
      </router-link>
    </div>
    <h3 class="mt-3">Scaling Container Clusters on AWS: ECS and EKS</h3>
    <p>Containers are a powerful tool to streamline your development and deployment process. However, a
      container cluster - no matter if you are using ECS (Elastic Container Service), EKS (Elastic Kubernetes
      Service), or self-managed Kubernetes</p>

    <router-link tag="a" :to="{name: 'PostDetails', params: {slug: 'how-to'}}"
                 class="text-left font-weight-bold">Read more
    </router-link>
  </article>
</template>
<script>
  export default {
    name: 'ArticleComponent'
  }
</script>
