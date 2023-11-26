<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Semester Plan') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            @if (count($semesterplans) == 0)
                <p>Your semester plan is empty</p>
                <img src="{{ asset('images/ThumbsUp.jpg') }}" alt="PizzaPizza">
            @else
                <table class="table">
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Time</th>
                            <th>Location</th>
                            <th>Instructor</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($semesterplans as $semesterplan)
                        <tr>
                            <td>{{ $semesterplan->course}}</td>
                            <td>{{$semesterplan->time}}</td>
                            <td>{{ $semesterplan->location}}</td>
                            <td>{{ $semesterplan->instructor}}</td>
                            <td>
                                <form method="POST" action="{{ route('semesterplans.destroy', $semesterplan->id) }}">
                                    @method('delete')
                                    @csrf

                                    <x-primary-button onclick="return confirm('Are you sure you wish to delete this course?')">
                                        {{ __('DELETE') }}
                                    </x-primary-button>
                                </form>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                {{ $semesterplans->links() }}
            @endif
        </div>
    </div>
</x-app-layout>