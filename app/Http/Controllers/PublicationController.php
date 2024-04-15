<?php

namespace App\Http\Controllers;

use App\Models\Publication;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Inertia\Inertia;
use Inertia\Response;

class PublicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Publications/Show', [
            //props
            
        ]);
        // return response('fine');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Publications/Create', [
            //props
        ]);
        // return response('fine 2');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request):RedirectResponse
    // public function store(Request $request):HttpResponse
    {
        // $publication = $request->user()->publications()->create($request->all());
        $data = $request->all();

        if (!empty($request->file('image'))) {
            $filename = time() . $request->file('image')->getClientOriginalName();
            $path = $request->file('image')->storeAs('images', $filename, 'public');
            $data['image'] = '/storage/' . $path;
        }


        $request->user()->publications()->create($data);
        return redirect(route('home')); //REENVIAR A LOS PRODUCTOS CREADOS POR EL USUARIO
        // return response($publication);
    }

    /**
     * Display the specified resource.
     */
    public function show(Publication $publication): Response
    {
        $publication->load('tag:id,name', 'user:id,name');
        return Inertia::render('Publications/Show', [
            'publication' => $publication,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Publication $publication)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Publication $publication)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Publication $publication)
    {
        //
    }
}
