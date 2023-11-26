<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-400 leading-tight">
            {{ __('Subjects') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <p class="ml-6"><a href="{{ route('subjects.edit', $subject) }}" class="btn-link">Edit Subject </a></p>
            <h3 class="mt-6">{{ $subject->subject}}</h3>
            <p class="mt-6">{{ $subject->full_name}}</p>
        </div>
    </div>
</x-app-layout>