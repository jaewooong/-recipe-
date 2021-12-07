module.exports = {
    HTML: function(list) {
    return `    
    <!DOCTYPE html>
    <html lang="en">

    <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>쿠킹 마마 - 자유게시판</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    </head>

    <body>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
        <a class="navbar-brand" href="#">Cooking MaMa</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="#">레시피
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">오늘의 추천</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="#">자유게시판</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>

    <!-- Page Content -->
    <div class="container mt-lg-5">

        <div class="row">

        <div class="col-lg-3 mt-lg-5">
            <h1 class="my-4 font-weight-bold">자유게시판</h1>
        </div>
        <!-- /.col-lg-3 -->

        <div class="col-lg-9 mt-lg-5">

            <table class="table table-hover mt-lg-5">
            <thead>
                <tr>
                <th scope="col">번호순</th>
                <th scope="col">작성자</th>
                <th scope="col">제목</th>
                <th scope="col">작성 시간</th>
                </tr>
            </thead>
            <tbody>
                ${list}
            </tbody>
            </table>

            <div class="mb-lg-5">
            <a href="/create">글 작성</a>
            </div>

        </div>

        <!-- /.col-lg-9 -->

        </div>
        <!-- /.row -->

    </div>
    <!-- /.container -->

    <!-- Footer -->
    <footer class="py-5 bg-dark">
        <div class="container">
        <p class="m-0 text-center text-white">뭐 먹을까? Cooking MaMa</p>
        </div>
        <!-- /.container -->
    </footer>

    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    </body>

    </html>
    `;
    }, list: function(board) {
        var list = '';
        var i = board.length - 1;
        while(i >= 0) {
            list = list + `
            <tr>
            <th scope="row">${board[i].id}</th>
            <td>${board[i].user}</td>
            <td>${board[i].title}</td>
            <td>${board[i].created}</td>
            </tr>`;

            i = i - 1;
        }

        return list;
    }
}