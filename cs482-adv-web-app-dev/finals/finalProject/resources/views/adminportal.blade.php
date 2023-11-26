<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-400 leading-tight">
            {{ __('Admin Portal') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="row">
                <div class="col-sm overflow-hidden shadow-sm sm:rounded-lg">
                    <a href="{{ route('courses.index') }}" class="mt-4">
                        <x-primary-button class="ml-3">
                            {{ __('Course Catalog') }}
                        </x-primary-button>
                    </a>
                    <div class="p-3 text-gray-400">
                        <div class="py-2">
                            <a href="{{ route('courses.index') }}" class="py-3">List of Courses</a>
                        </div>
                        <div class="py-2">
                            <a href="{{ route('courses.create') }}" class="py-3">Add New Course</a>
                        </div>
                        <div class="py-2">
                            <a href="{{ route('courses.index') }}"class="py-3">Update Selected Course</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm overflow-hidden shadow-sm sm:rounded-lg">
                    <a href="{{ route('subjects.index') }}" class="mt-4">
                        <x-primary-button class="ml-3">
                            {{ __('Course Catalog') }}
                        </x-primary-button>
                    </a>
                    <div class="p-3 text-gray-400">
                        <div class="py-2">
                            <a href="{{ route('subjects.index') }}" class="py-3">List of Subjects</a>
                        </div>
                        <div class="py-2">
                            <a href="{{ route('subjects.create') }}" class="py-3">Add New Subject</a>
                        </div>
                        <div class="py-2">
                            <a href="{{ route('subjects.index') }}" class="py-3">Update Selected Subject</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm overflow-hidden shadow-sm sm:rounded-lg">
                    <a href="{{ route('schedules.index') }}" class="mt-4">
                        <x-primary-button class="ml-3">
                            {{ __('Course Catalog') }}
                        </x-primary-button>
                    </a>
                    <div class="p-3 text-gray-400">
                        <div class="py-2">
                            <a href="{{ route('schedules.index') }}" class="py-3">List of Schedules</a>
                        </div>
                        <div class="py-2">
                            <a href="{{ route('schedules.create') }}" class="py-3">Add New Schedule</a>
                        </div>
                        <div class="py-2">
                            <a href="{{ route('schedules.index') }}" class="py-3">Update Selected Schedule</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
