<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-400 leading-tight">
            {{ __('Subjects') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <a href="{{ route('subjects.create') }}">+ New Subject</a>
            <table class="table">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Full Name</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($subjects as $subject)
                    <tr>
                        <td>
                            <a href="{{ route('subjects.show', $subject->id )}}">{{ $subject->subject}}</a>
                        </td>
                        <td>
                            <a href="{{ route('subjects.show', $subject->id )}}">{{ $subject->full_name}}</a>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            {{ $subjects->links() }}
        </div>
    </div>
</x-app-layout>