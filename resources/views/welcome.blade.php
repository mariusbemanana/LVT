<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">

    <title>APP</title>

    <link rel="stylesheet" href="{{mix('css/app.css')}}">

    <script> var BASE_URL = "{{ URL::to('/') }}" </script>

    <script src="{{mix('js/app.js')}}" defer></script>

</head>
<body>
<div id="app">
    <app></app>
</div>

</body>
</html>
