<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Schedules') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <form method="POST" action="{{ route('schedules.store') }}">
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
                    <x-text-input id="number" class="block mt-1 w-full" type="number" name="number" :value="old('number')" />
                    @error('number')
                        <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <!-- Section -->
                <div>
                    <x-input-label for="section" :value="__('Section')" />
                    <x-text-input id="section" class="block mt-1 w-full" type="number" name="section" :value="old('section')" />
                    @error('number')
                        <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <!-- Time -->
                <div>
                    <x-input-label for="time" :value="__('Time')" />
                    <x-text-input id="time" class="block mt-1 w-full" type="text" name="time" :value="old('time')" />
                    @error('number')
                        <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <!-- Days -->
                <div>
                    <x-input-label for="days" :value="__('Days')" />
                    <x-text-input id="days" class="block mt-1 w-full" type="text" name="days" :value="old('days')" />
                    @error('number')
                        <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <!-- Instructor -->
                <div>
                    <x-input-label for="instructor" :value="__('Instructor')" />
                    <x-text-input id="instructor" class="block mt-1 w-full" type="text" name="instructor" :value="old('instructor')" />
                    @error('number')
                        <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <!-- Location -->
                <div>
                    <x-input-label for="location" :value="__('Location')" />
                    <x-text-input id="location" class="block mt-1 w-full" type="text" name="location" :value="old('location')" />
                    @error('number')
                        <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <div class="flex items-center justify-end mt-4">
                    <x-primary-button class="ml-3">
                        {{ __('Add New Schedule') }}
                    </x-primary-button>
                </div>
            </form>
        </div>
    </div>
</x-app-layout>