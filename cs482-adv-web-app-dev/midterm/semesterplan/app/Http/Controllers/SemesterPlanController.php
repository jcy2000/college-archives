<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SemesterPlan;
use App\Models\Schedule;
use App\Models\Course;
use Illuminate\Support\Facades\Auth;

class SemesterPlanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $userId = Auth::id();
        $semesterplans = SemesterPlan::where('user_id', $userId)->orderby('course')->paginate(20);
        return view('semesterplans.index', ['semesterplans' => $semesterplans]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('semesterplans.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $id = $request->input('post_id');
        $schedule = Schedule::find($id);
        $userId = Auth::id();
        
        if (SemesterPlan::where('user_id', $userId)->
                          where('course', $schedule->subject." ".$schedule->number)->
                          where('section', $schedule->section)->
                          exists())
            return to_route('schedules.index')->with('status', 'Section already added!');

        $semesterPlan = new SemesterPlan;
        $semesterPlan->user_id = $userId;
        $semesterPlan->course = $schedule->subject." ".$schedule->number;
        $semesterPlan->section = $schedule->section;
        $semesterPlan->time = $schedule->time;
        $semesterPlan->location = $schedule->location;
        $semesterPlan->instructor = $schedule->instructor;
        $semesterPlan->save();

        return to_route('schedules.index')->with('status', 'Section added successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Get User ID
        $userId = Auth::id();

        // Find the selected semester plan for the specified user
        $semesterPlan = SemesterPlan::where('user_id', $userId)->where('id', $id);

        // Delete the semester plan
        $semesterPlan->delete();
        
        // Return to the list of courses
        return to_route('schedules.index')->with('status', "Section deleted successfully");
    }
}
