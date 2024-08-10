<template>
  <div class="mt-8 flex relative lg:mt-0 lg:py-4 lg:pl-[calc(var(--section-gap)/2)] lg:pr-0 lg:pb-4">
    <i class="flex items-center justify-center w-8 h-8 text-[var(--color-text)] lg:absolute lg:w-12 lg:h-12 lg:top-[calc(50%-25px)] lg:left-[-26px] lg:border lg:border-[var(--color-border)] lg:bg-[var(--color-background)] lg:rounded-lg">
      <slot name="icon"></slot>
    </i>
    <div class="flex-1 ml-4">
      <h3 class="text-lg font-medium mb-1.5 text-[var(--color-heading)]">
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
    <div class="lg:absolute lg:left-0 lg:bottom-[calc(50%+25px)] lg:h-[calc(50%-25px)] lg:border-l lg:border-[var(--color-border)] lg:content-['']" />
    <div class="lg:absolute lg:left-0 lg:top-[calc(50%+25px)] lg:h-[calc(50%-25px)] lg:border-l lg:border-[var(--color-border)] lg:content-['']" />
  </div>
</template>
