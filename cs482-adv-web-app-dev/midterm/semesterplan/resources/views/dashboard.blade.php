<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            <a href=" {{ route('dashboard')}}">Semester Plan</a>
            - {{ __('Course Search & Plan Next Semester') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow-sm sm:rounded-lg mb-4">
                <a href="{{ route('courses.index') }}" class="mt-4">
                    <x-primary-button>
                        {{ __('View Course Catalog') }}
                    </x-primary-button>
                </a>
                <a href="{{ route('schedules.index') }}" class="mt-4">
                    <x-primary-button>
                        {{ __('View Schedule of Classes') }}
                    </x-primary-button>
                </a>
                <a href="{{ route('semesterplans.index') }}" class="mt-4">
                    <x-primary-button>
                        {{ __('View Semester Plan') }}
                    </x-primary-button>
                </a>
            </div>
            <img src="{{ asset('images/PizzaPizza.png') }}" alt="PizzaPizza">
        </div>
    </div>
</x-app-layout>
