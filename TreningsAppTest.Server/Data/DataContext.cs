using Microsoft.EntityFrameworkCore;
using TreningsAppTest.Server.Models;

namespace TreningsAppTest.Server.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        { }

        

       
        public DbSet<User> Users { get; set; }
        public DbSet<Workout> Workouts { get; set; }

        
     
    }
}
