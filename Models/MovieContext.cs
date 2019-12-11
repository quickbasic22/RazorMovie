using System;
using Microsoft.EntityFrameworkCore;

namespace RazorMovie.Models
{

    public class MovieContext: DbContext
    {
       public MovieContext(DbContextOptions<RazorMovie.Models.MovieContext> options): base(options)
       {
       }
       public DbSet<RazorMovie.Models.Movie> Movie { get; set; }
    }
}

