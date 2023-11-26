<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-400 leading-tight">
            {{ __('Schedules') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <p class="ml-6"><a href="{{ route('schedules.edit', $schedule) }}" class="btn-link">Edit Schedule </a></p>
            <h3 class="mt-6">{{ $schedule->subject}} {{ $schedule->number}}</h3>
            <p class="mt-6">Section: {{ $schedule->section}}</p>
            <p class="mt-6">
                Time:
                @if ($schedule->time != "TBA")
                    {{$schedule->days}}
                @endif
                {{$schedule->time}}

                
            </p>
            <p class="mt-6">Instructor: {{ $schedule->instructor}}</p>
            <p class="mt-6">Location: {{ $schedule->location}}</p>
        </div>
    </div>
</x-app-layout>