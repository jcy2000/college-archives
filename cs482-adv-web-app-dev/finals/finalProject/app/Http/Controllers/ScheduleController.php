<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedule;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $schedules = Schedule::orderby('subject')->orderby('number')->orderbyraw('CONVERT(section, SIGNED)')->paginate(20);
        return view('schedules.index', ['schedules' => $schedules]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('schedules.create');
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
            'section' => 'required',
            'time' => 'required',
            'days' => 'required',
            'instructor' => 'required',
            'location' => 'required']);

        $schedule = new Schedule;

        $schedule->subject = $request->subject;
        $schedule->number = $request->number;
        $schedule->section = $request->section;
        $schedule->time = $request->time;
        $schedule->days = $request->days;
        $schedule->instructor = $request->instructor;
        $schedule->location = $request->location;

        $schedule->save();

        return to_route('schedules.show', $schedule);
    }

    /**
     * Display the specified resource.
     */
    public function show(Schedule $schedule)
    {
        return view('schedules.show', ['schedule' => $schedule]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Schedule $schedule)
    {
        return view('schedules.edit', ['schedule' => $schedule]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Schedule $schedule)
    {
        // Define validation rules
        $request->validate([
            'subject' => 'required|max:30',
            'number' => 'required',
            'section' => 'required',
            'time' => 'required',
            'days' => 'required',
            'instructor' => 'required',
            'location' => 'required']);

        $schedule = Schedule::find($schedule->id);

        $schedule->subject = $request->subject;
        $schedule->number = $request->number;
        $schedule->section = $request->section;
        $schedule->time = $request->time;
        $schedule->days = $request->days;
        $schedule->instructor = $request->instructor;
        $schedule->location = $request->location;

        $schedule->save();

        return to_route('schedules.show', $schedule);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
