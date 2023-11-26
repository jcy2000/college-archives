<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Subject;

class CourseController extends Controller
{
    // Displays a listing of courses
    public function getCourses(Request $request)
    {
        // Get all subjects and order them alphabetically
        $subjects = Subject::select('subject', 'full_name')->orderby('subject')->get();

        // Read the subject using the URL parameter
        $subject = $request->subject;
        
        // If the subject is a valid subject, then get all courses in that subject.
        $courses = [];
        if (isset($subject)) {
            $courses = Course::select('subject', 'number', 'title', 'credits')
            ->where('subject', $subject)
            ->orderBy('number')->get();
        }

        return view('courses', ['subject' => $subject, 'courses' => $courses, 'subjects' => $subjects]);
    }
}