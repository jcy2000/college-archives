<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Courses') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <form method="POST" action="{{ route('courses.store') }}">
                @csrf

                <!-- Subject -->
                <div>
                    <x-input-label for="subject" :value="__('Subject')" />
                    <x-text-input id="subject" class="block mt-1 w-full" type="text" name="subject" :value="old('subject')"  autofocus />
                    @error('subject')
                        <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <!-- Number -->
                <div>
                    <x-input-label for="number" :value="__('Number')" />
                    <x-text-input id="number" class="block mt-1 w-full" type="text" name="number" :value="old('number')" />
                    @error('number')
                        <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <!-- Title -->
                <div>
                    <x-input-label for="title" :value="__('Title')" />
                    <x-textarea id="title" class="block mt-1 w-full" name="title" :value="old('title')"  />
                    @error('title')
                        <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <!-- Description -->
                <div>
                    <x-input-label for="description" :value="__('Description')" />
                    <x-textarea id="description" class="block mt-1 w-full" name="description" :value="old('description')"   />
                    @error('description')
                        <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <!-- Credits -->
                <div>
                    <x-input-label for="credits" :value="__('Credits')" />
                    <x-text-input id="credits" class="block mt-1 w-full" type="number" name="credits" :value="old('credits')"  />
                    @error('credits')
                        <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <!-- Prereq -->
                <div>
                    <x-input-label for="prereq" :value="__('Prereq')" />
                    <x-textarea id="prereq" class="block mt-1 w-full" name="prereq" :value="old('prereq')"  />
                    @error('prereq')
                        <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <div class="flex items-center justify-end mt-4">
                    <x-primary-button class="ml-3">
                        {{ __('Add New Course') }}
                    </x-primary-button>
                </div>
            </form>
        </div>
    </div>
</x-app-layout>