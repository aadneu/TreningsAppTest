using System.Runtime.InteropServices.JavaScript;

namespace TreningsAppTest.Server.Models
{
    public class Workout
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Activity { get; set; } = String.Empty;
        public int Duration { get; set; }
        public DateTime Date { get; set; }
        public DateTime CreatedAt { get; set; }

       public Workout()
        {
            CreatedAt = DateTime.Now;
        }
    }
}
