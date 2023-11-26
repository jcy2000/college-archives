<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $courses = Course::orderby('subject')->orderby('number')->paginate(20);
        return view('courses.index', ['courses' => $courses]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('courses.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Define validation rules
        $request->validate([
            'subject' => 'required|max:30',
            'number' => 'required',
            'title' => 'required',
            'description' => 'required',
            'credits' => 'required']);

        $course = new Course;

        $course->subject = $request->subject;
        $course->number = $request->number;
        $course->title = $request->title;
        $course->description = $request->description;
        $course->credits = $request->credits;

        $course->save();

        return to_route('courses.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course)
    {
        return view('courses.show', ['course' => $course]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        return view('courses.edit', ['course' => $course]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Course $course)
    {
        // Define validation rules
        $request->validate([
            'subject' => 'required|max:30',
            'number' => 'required',
            'title' => 'required',
            'description' => 'required',
            'credits' => 'required']);

        $course = Course::find($course->id);

        $course->subject = $request->subject;
        $course->number = $request->number;
        $course->title = $request->title;
        $course->description = $request->description;
        $course->credits = $request->credits;

        $course->save();

        return to_route('courses.show', $course);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
