<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => {
  return queryCollection('about').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <Motion
      :initial="{
        scale: 1.1,
        opacity: 0,
        filter: 'blur(20px)'
      }"
      :animate="{
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)'
      }"
      :transition="{
        duration: 0.6,
        delay: 0.5
      }"
    >
      <UPageHero
        :title="page.title"
        :description="page.description"
        orientation="horizontal"
        :ui="{
          container: 'lg:flex sm:flex-row items-center',
          title: '!mx-0 text-left',
          description: '!mx-0 text-left',
          links: 'justify-start'
        }"
      >
        <UUser
          orientation="vertical"
          name="A.T.M Shamsuzzaman (Zaman)"
          description="Founder, Managing Director"
          :avatar="{
            src: '/images/team/SZaman.png',
            size: 48
          }"
        />
      </UPageHero>
      <UPageSection
        :ui="{
          container: '!pt-0'
        }"
      >
        <MDC
          :value="page.content"
          unwrap="p"
        />
        <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
          <UCard variant="subtle">
            <template #header>
              <NuxtImg
                src="/images/team/SZaman.png"
                alt="A.T.M Shamsuzzaman (Zaman)"
                width="64"
                height="auto"
                class="mx-auto"
              >
                A.T.M Shamsuzzaman (Zaman)
              </NuxtImg>
            </template>
            <div class="py-2">
              <span class="truncate text-center block">A.T.M Shamsuzzaman (Zaman)</span>
              <span class="truncate text-center text-sm italic text-gray-500 block">Founder and Managing Director at QVC BD LTD</span>
            </div>
          </UCard>
          <UCard variant="subtle">
            <template #header>
              <NuxtImg
                src="/images/team/SHBiplob.png"
                alt="Md. Shazzad Hossain (Biplob)"
                width="64"
                height="auto"
                class="mx-auto"
              >
                Md. Shazzad Hossain (Biplob)
              </NuxtImg>
            </template>
            <div class="py-2">
              <span class="truncate text-center block">Md. Shazzad Hossain (Biplob)</span>
              <span class="truncate text-center text-sm italic text-gray-500 block">Director at QVC BD LTD</span>
            </div>
          </UCard>
        </div>
        <div class="flex flex-row justify-center items-center py-10 space-x-[-2rem]">
          <PolaroidItem
            v-for="(image, index) in page.images"
            :key="index"
            :image="image"
            :index
          />
        </div>
      </UPageSection>
    </Motion>
  </UPage>
</template>
