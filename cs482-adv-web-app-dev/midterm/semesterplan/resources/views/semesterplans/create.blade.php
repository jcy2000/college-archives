<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Subjects') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <form method="POST" action="{{ route('subjects.store') }}">
                @csrf

                <!-- Subject -->
                <div>
                    <x-input-label for="subject" :value="__('Subject')" />
                    <x-text-input id="subject" class="block mt-1 w-full" type="text" name="subject" :value="old('subject')"  autofocus />
                    @error('subject')
                        <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <!-- Full Name -->
                <div>
                    <x-input-label for="full_name" :value="__('Full Name')" />
                    <x-text-input id="full_name" class="block mt-1 w-full" type="text" name="full_name" :value="old('full_name')" />
                    @error('number')
                        <div class='alert alert-danger'>{{ $message }}</div>
                    @enderror
                </div>

                <div class="flex items-center justify-end mt-4">
                    <x-primary-button class="ml-3">
                        {{ __('Add New Subject') }}
                    </x-primary-button>
                </div>
            </form>
        </div>
    </div>
</x-app-layout>