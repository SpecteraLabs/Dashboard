<template>
	<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
		<div class="px-2 mx-2 navbar-start">
			<span class="text-lg font-bold">
					Spectera
			</span>
		</div> 
		<div class="hidden px-2 mx-2 navbar-center lg:flex">
			<div class="flex items-stretch">
			<a class="btn btn-ghost btn-sm rounded-btn">
					Home
			</a> 
			<a class="btn btn-ghost btn-sm rounded-btn" href="www.guide.spectera.tk">
					Guide
			</a> 
			<NuxtLink class="btn btn-ghost btn-sm rounded-btn" to="/about">
					About
			</NuxtLink> 
			<NuxtLink class="btn btn-ghost btn-sm rounded-btn" to="/contact">
					Contact
			</NuxtLink>
			</div>
		</div> 
		<div class="navbar-end">
			<p>Welcome!</p>
		</div>
	</div>
</template>