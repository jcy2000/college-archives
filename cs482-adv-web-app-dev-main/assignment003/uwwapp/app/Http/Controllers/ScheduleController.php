<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedule;
use App\Models\Subject;

class ScheduleController extends Controller
{
    // Display the listing of course schedules
    public function getSchedules(Request $request)
    {
        // Get all subjects and order them alphabetically
        $subjects = Subject::select('subject', 'full_name')->orderby('subject')->get();

        // Read the subject using the URL parameter
        $subject = $request->subject;
        
        // If the subject is a valid subject, then get all courses in that subject.
        $schedules = [];
        if (isset($subject)) {
            $schedules = Schedule::select('subject', 'section', 'number', 'time', 'instructor', 'location')
            ->where('subject', $subject)
            ->orderBy('number')->get();
        }

        return view('schedules', ['subject' => $subject, 'schedules' => $schedules, 'subjects' => $subjects]);
    }
}
