<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subject;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $subjects = Subject::orderby('subject')->paginate(20);
        return view('subjects.index', ['subjects' => $subjects]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('subjects.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Define validation rules
        $request->validate([
            'subject' => 'required|max:30',
            'full_name' => 'required']);

        $subject = new Subject;

        $subject->subject = $request->subject;
        $subject->full_name = $request->full_name;

        $subject->save();

        return to_route('subjects.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Subject $subject)
    {
        return view('subjects.show', ['subject' => $subject]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Subject $subject)
    {
        return view('subjects.edit', ['subject' => $subject]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Subject $subject)
    {
        // Define validation rules
        $request->validate([
            'subject' => 'required|max:30',
            'full_name' => 'required']);

        $subject = Subject::find($subject->id);

        $subject->subject = $request->subject;
        $subject->full_name = $request->full_name;

        $subject->save();

        return to_route('subjects.show', $subject);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
