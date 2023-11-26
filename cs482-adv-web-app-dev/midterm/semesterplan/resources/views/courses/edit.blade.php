<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Courses') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <form method="POST" action="{{ route('courses.update', $course->id) }}">
                @method('put')
                @csrf

                <!-- Subject -->
                <div>
                    <x-input-label for="subject" :value="__('Subject')" />
                    <x-text-input id="subject" class="block mt-1 w-full" type="text" name="subject" :value="old('subject', $course->subject)" autofocus />
                    @error('subject')
                    <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <!-- Number -->
                <div class="mt-3">
                    <x-input-label for="number" :value="__('Number')" />
                    <x-text-input id="number" class="block mt-1 w-full" type="text" name="number" :value="old('number', $course->number)" />
                    @error('number')
                    <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <!-- Title -->
                <div class="mt-3">
                    <x-input-label for="title" :value="__('Title')" />
                    <textarea id="title" class="block mt-1 w-full" name="title" :value="old('title', $course->title)"
                              >{{ old('title', $course->title)}}</textarea>
                    @error('title')
                    <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <!-- Description -->
                <div class="mt-3">
                    <x-input-label for="description" :value="__('Description')" />
                    <textarea id="description" class="block mt-1 w-full" name="description" rows="5"
                              >{{ old('description', $course->description) }}</textarea>

                    @error('description')
                    <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <!-- Credits -->
                <div class="mt-3">
                    <x-input-label for="credits" :value="__('Credits')" />
                    <x-text-input id="credits" class="block mt-1 w-full" type="number" name="credits"
                                  :value="old('credits', $course->credits)" />
                    @error('credits')
                    <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <!-- Prereq -->
                <div class="mt-3">
                    <x-input-label for="prereq" :value="__('Prereq')" />
                    <textarea id="prereq" class="block mt-1 w-full" name="prereq"
                              :value="old('prereq', $course->prereq)">{{ old('prereq', $course->prereq) }}</textarea>
                    @error('prereq')
                    <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <div class="flex items-center justify-end mt-4">
                    <x-primary-button class="ml-3">
                        {{ __('Update Course') }}
                    </x-primary-button>
                </div>
            </form>
        </div>
    </div>
</x-app-layout>
